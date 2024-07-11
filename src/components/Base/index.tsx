import {
  BranchesOutlined,
  ForkOutlined,
  GithubOutlined,
  StarOutlined,
  TagOutlined,
} from '@ant-design/icons';
import { request } from '@umijs/max';
import { Flex } from 'antd';
import React from 'react';
import styles from './index.less';

const githubUrl = 'https://github.com';

interface GithubProps {
  style?: React.CSSProperties;
  repository: string;
  showStarsNum?: boolean;
  showForksNum?: boolean;
  showTag?: string;
}

interface GithubState {
  isWide: boolean;
  repositoryInfo?: any;
}

//检查浏览器宽度
function checkWide() {
  return window.innerWidth > 767;
}

class GithubClass extends React.Component<GithubProps, GithubState> {
  constructor(props: GithubProps) {
    super(props);
    this.state = {
      isWide: checkWide(),
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    //窗口大小变更
    window.addEventListener('resize', this.handleResize);
    if (
      this.state.isWide &&
      (this.props.showForksNum || this.props.showStarsNum) &&
      !this.state.repositoryInfo
    ) {
      (async () => {
        const repositoryInfo = await request(
          `https://api.github.com/repos/${this.props.repository}`,
        );
        this.setState({
          repositoryInfo: repositoryInfo,
        });
      })();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({
      isWide: checkWide(),
    });
  }

  render() {
    const { style, repository, showStarsNum, showForksNum, showTag } =
      this.props;
    const inlineStyle = {
      cursor: 'pointer',
      padding: '12px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      verticalAlign: 'middle',
      ...style,
    };

    return this.state.isWide ? (
      <Flex
        className={styles.githubLabel}
        onClick={() => {
          window.open(`${githubUrl}/${repository}`);
        }}
        title={'goto github'}
      >
        <Flex>
          <BranchesOutlined style={{ fontSize: '32px' }} />
        </Flex>
        <Flex vertical>
          {repository}
          <Flex gap={4}>
            {showTag && (
              <div>
                <TagOutlined />
                {showTag}
              </div>
            )}
            {showStarsNum && (
              <div>
                <StarOutlined />
                {this.state.repositoryInfo?.stargazers_count}
              </div>
            )}
            {showForksNum && (
              <div>
                <ForkOutlined />
                {this.state.repositoryInfo?.forks_count}
              </div>
            )}
          </Flex>
        </Flex>
      </Flex>
    ) : (
      <span
        style={inlineStyle}
        onClick={() => {
          window.open(`${githubUrl}/${repository}`);
        }}
      >
        <GithubOutlined />
      </span>
    );
  }
}

export const Github = GithubClass;

import {
  BranchesOutlined,
  ForkOutlined,
  GithubOutlined,
  StarOutlined,
  TagOutlined,
} from '@ant-design/icons';
import { request } from '@umijs/max';
import { Flex } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './index.less';

const githubUrl = 'https://github.com';

interface GithubProps {
  style?: React.CSSProperties;
  repository: string;
  showStarsNum: boolean;
  showForksNum: boolean;
  showTag: string;
}

export const Github: React.FC<GithubProps> = (props) => {
  const { style, repository, showStarsNum, showForksNum, showTag } = props;
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

  const [repositoryInfo, setRepositoryInfo] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    //窗口大小变更
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    console.log(!repositoryInfo);
    if (
      windowWidth >= 600 &&
      (showForksNum || showStarsNum) &&
      !repositoryInfo
    ) {
      const fetchRepositoryInfo = async () => {
        const response = await request(
          `https://api.github.com/repos/${repository}`,
        );
        setRepositoryInfo(response);
      };
      fetchRepositoryInfo();
    }
  }, [repository, windowWidth]);
  if (windowWidth < 600) {
    return (
      <span
        style={inlineStyle}
        onClick={() => {
          window.open(`${githubUrl}/${repository}`);
        }}
      >
        <GithubOutlined />
      </span>
    );
  } else {
    return (
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
              <>
                <TagOutlined />
                {showTag}
              </>
            )}
            {showStarsNum && (
              <>
                <StarOutlined />
                {repositoryInfo?.stargazers_count}
              </>
            )}
            {showForksNum && (
              <>
                <ForkOutlined />
                {repositoryInfo?.forks_count}
              </>
            )}
          </Flex>
        </Flex>
      </Flex>
    );
  }
};

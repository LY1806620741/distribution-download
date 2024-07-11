import { DebugPanel } from '@/components/Render';
import { DownOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Dropdown, Flex, Layout, Menu, MenuProps, Row } from 'antd';
import YAML from 'js-yaml';
import { useEffect, useState } from 'react';
import styles from './index.less';

const { Header, Content } = Layout;

export default () => {
  const [yamlData, setYamlData] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    async function fetchYamlContent() {
      const configFileUrl = searchParams.get('config');
      if (!configFileUrl) return;
      try {
        const response = await fetch(configFileUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        try {
          // 使用js-yaml的safeLoad或safeLoadAll方法解析YAML字符串
          const parsedYaml = YAML.load(data);
          // merge 其他参数
          searchParams.forEach((value, key) => {
            if (key !== 'config') {
              if (!value) {
                parsedYaml[key] = 'true';
              } else {
                parsedYaml[key] = value;
              }
            }
          });
          setYamlData(parsedYaml);
        } catch (e) {
          console.error('Error parsing YAML:', e);
        }
      } catch (error) {
        console.error('Error fetching YAML content:', error);
      }
    }

    fetchYamlContent();
  }, []); // 空数组作为依赖，确保只在组件挂载时运行一次

  if (!yamlData) return <div>Loading...</div>;

  const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  return (
    <>
      {yamlData.debug && <DebugPanel data={{ yamlData: yamlData }} />}
      <Layout>
        <Header className={styles.layoutHeader}>
          <a href={window.location.pathname + window.location.search}>
            {yamlData.icon && <img src={yamlData.icon} height="40" />}
            {yamlData.productName && <span>{yamlData.productName}</span>}
          </a>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items1}
            style={{ flex: 1, minWidth: 0 }}
          ></Menu>
        </Header>
        <Content>
          <Row className={styles.tips}>
            <p>
              <a href="/updates">Version 1.91</a> is now available! Read about
              the new features and fixes from June.
            </p>
          </Row>
          <PageContainer className={styles.mainContainer}>
            <ProCard direction="column" ghost>
              <ProCard
                gutter={16}
                ghost
                style={{ height: 300 }}
                layout="center"
                wrap
              >
                <ProCard
                  colSpan={{ md: yamlData.showImage ? 4 : 24 }}
                  layout="center"
                  split={'horizontal'}
                  className={styles.downloadCard}
                >
                  {yamlData.label && (
                    <div style={{ margin: '20px 0 10px 0' }}>
                      <h1>
                        {yamlData.label}
                        {yamlData.labelStrong && (
                          <strong style={{ display: 'block' }}>
                            {yamlData.labelStrong}
                          </strong>
                        )}
                      </h1>
                    </div>
                  )}
                  {yamlData.desciption && <div>{yamlData.desciption}</div>}
                  {yamlData.download && (
                    <div>
                      {' '}
                      <Dropdown.Button size="large" icon={<DownOutlined />}>
                        <Flex vertical>
                          <span>Download Mac Universal</span>
                          <small>Stable Build</small>
                        </Flex>
                      </Dropdown.Button>
                    </div>
                  )}
                  {yamlData.otherDownload && (
                    <div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: yamlData.otherDownload,
                        }}
                      />
                    </div>
                  )}
                  {yamlData.liscense && <div>{yamlData.liscense}</div>}
                </ProCard>
                {yamlData?.showImage && <ProCard colSpan={{ md: 8 }} />}
              </ProCard>
            </ProCard>
          </PageContainer>
        </Content>
      </Layout>
    </>
  );
};

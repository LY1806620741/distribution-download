import { DownOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Dropdown, Flex, Layout, Menu, MenuProps, Row } from 'antd';
import React from 'react';
import styles from './index.less';

const { Header, Content } = Layout;

type ConfigProps = {
  icon: string;
  productName: string;
  showImage: string;
  label: string;
  labelStrong: string;
  desciption: string;
  download: string;
  otherDownload: string;
  liscense: string;
};

const VscodeSimilar: React.FC<{ config: ConfigProps }> = ({ config }) => {
  const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  return (
    <Layout>
      <Header className={styles.layoutHeader}>
        <a href={window.location.pathname + window.location.search}>
          {config.icon && <img src={config.icon} height="40" />}
          {config.productName && <span>{config.productName}</span>}
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
            <a href="/updates">Version 1.91</a> is now available! Read about the
            new features and fixes from June.
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
                colSpan={{ md: config.showImage ? 4 : 24 }}
                layout="center"
                split={'horizontal'}
                className={styles.downloadCard}
              >
                {config.label && (
                  <div style={{ margin: '20px 0 10px 0' }}>
                    <h1>
                      {config.label}
                      {config.labelStrong && (
                        <strong style={{ display: 'block' }}>
                          {config.labelStrong}
                        </strong>
                      )}
                    </h1>
                  </div>
                )}
                {config.desciption && <div>{config.desciption}</div>}
                {config.download && (
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
                {config.otherDownload && (
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: config.otherDownload,
                      }}
                    />
                  </div>
                )}
                {config.liscense && <div>{config.liscense}</div>}
              </ProCard>
              {config?.showImage && <ProCard colSpan={{ md: 8 }} />}
            </ProCard>
          </ProCard>
        </PageContainer>
      </Content>
    </Layout>
  );
};

export default VscodeSimilar;

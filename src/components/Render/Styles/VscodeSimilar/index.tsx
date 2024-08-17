/**
 * https://github.com/microsoft/vscode-docs/blob/b7aab4de087c0dfa1ca5228b10113d54ed489b25/release-notes/images/1_54/macOS-universal-download.png
 */

import { SelectLang } from '@@/plugin-locale';
import { DownOutlined, GithubOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Button, Dropdown, Flex, Layout, Row, Tooltip } from 'antd';
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
  return (
    <Layout>
      <Header className={styles.layoutHeader}>
        <Flex justify="space-between" align="center" style={{ width: '100%' }}>
          <a href={window.location.pathname + window.location.search}>
            {config.icon && <img src={config.icon} height="40" />}
            {config.productName && <span>{config.productName}</span>}
          </a>
          <Flex gap="small" align="center">
            {config.lang && (
              <SelectLang
                postLocalesData={() => {
                  return config.lang;
                }}
              />
            )}
            {config.github && (
              <Tooltip title="Gthub">
                <Button ghost icon={<GithubOutlined />} href={config.github} />
              </Tooltip>
            )}
          </Flex>
        </Flex>
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
                    <Dropdown.Button
                      className={styles.downloadButton}
                      size="large"
                      icon={<DownOutlined />}
                    >
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

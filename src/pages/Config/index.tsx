import {
  PageContainer,
  ProCard,
  ProDescriptions,
} from '@ant-design/pro-components';
import React, { useRef, useState } from 'react';

const ConfigPanel = () => {
  const actionRef = useRef();
  return (
    <ProDescriptions
      actionRef={actionRef}
      // bordered
      formProps={{
        onValuesChange: (e, f) => console.log(f),
      }}
      title="配置"
      request={async () => {
        return Promise.resolve({
          success: true,
          data: {
            rate: 5,
            id: '这是一段文本columns',
            date: '20200809',
            money: '1212100',
            state: 'all',
            state2: 'open',
          },
        });
      }}
      editable={{}}
      columns={[
        {
          title: '风格',
          key: 'text',
          dataIndex: 'id',
          copyable: true,
          ellipsis: true,
        },
      ]}
    ></ProDescriptions>
  );
};

const WebBrowserComponent = () => {
  const [url, setUrl] = useState(
    'https://probable-computing-machine-965rxrxrxgxf7j4q-8000.app.github.dev/render',
  ); // 初始URL

  const handleInputChange = (e) => {
    // 更新URL状态，注意需要做一些基本的安全检查，比如阻止JavaScript注入等
    const newUrl = e.target.value;
    setUrl(newUrl);
  };

  return (
    <ProDescriptions
      title="模拟浏览"
      request={async () => {
        return Promise.resolve({
          success: true,
          data: {
            date: '20200809',
            money: '1212100',
            money2: -12345.33,
            state: 'all',
            switch: true,
            state2: 'open',
          },
        });
      }}
      column={1}
      columns={[
        {
          title: '地址',
          key: 'text',
          dataIndex: 'id',
          copyable: true,
          ellipsis: true,
        },
      ]}
    >
      <input
        type="text"
        value={url}
        onChange={handleInputChange}
        placeholder="请输入网址"
      />
      <iframe
        title="web-browser-component"
        src={url}
        width="100%"
        height="400vh"
        // flex-grow="1"
        frameBorder="0"
        sandbox="allow-same-origin allow-scripts allow-popups"
      />
    </ProDescriptions>
  );
};

const ConfigPage: React.FC = () => {
  return (
    <PageContainer ghost>
      <ProCard direction="column" ghost>
        <ProCard gutter={16} ghost style={{ height: 300 }} layout="center" wrap>
          <ProCard colSpan={{ md: 4 }} layout="center">
            <ConfigPanel />
          </ProCard>
          <ProCard colSpan={{ md: 20 }}>
            <WebBrowserComponent />
          </ProCard>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default ConfigPage;

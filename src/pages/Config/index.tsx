import {
  PageContainer,
  ProCard,
  ProDescriptions,
  ProFormSegmented,
  ProFormText,
  StepsForm,
} from '@ant-design/pro-components';
import React, { useState } from 'react';
import styles from './index.less';

const ConfigPanel: React.FC<{
  configFilePath: string;
  handleChangeWebUrl: any;
}> = ({ configFilePath, handleChangeWebUrl }) => {
  return (
    <div style={{ width: '100%' }}>
      <ProFormSegmented
        name="segmented"
        label="配置方式"
        valueEnum={{
          configFile: '配置文件',
          item: '配置项',
        }}
      />

      <StepsForm<{
        name: string;
      }>
        stepsProps={{
          size: 'small',
        }}
        submitter={{
          render: () => {
            return <></>;
          },
        }}
      >
        <StepsForm.StepForm<{
          name: string;
        }>
          name="base"
          title="指定配置"
          stepProps={{
            description: '当参数过多时，url无法承载太多参数，因此使用配置文件',
          }}
        >
          <ProFormText
            width="sm"
            name="name"
            label="配置文件地址"
            tooltip="需要确保url的总长不超过浏览器限制"
            placeholder="请输入配置文件地址"
            value={configFilePath}
            onChange={handleChangeWebUrl}
          />
        </StepsForm.StepForm>
      </StepsForm>

      {/* <StepsForm<{
        name: string;
      }>
        stepsProps={{
          // direction: 'vertical',
          size: "small"
        }}
        formRef={formRef}
        onFinish={async () => {
          await waitTime(1000);
          message.success('提交成功');
        }}
        formProps={{
          validateMessages: {
            required: '此项为必填项',
          },
        }}
      >
        <StepsForm.StepForm<{
          name: string;
        }>
          name="base"
          title="配置方式"
          stepProps={{
            // description: '这里填入的都是基本信息',
          }}
          onFinish={async () => {
            console.log(formRef.current?.getFieldsValue());
            await waitTime(2000);
            return true;
          }}
        >
 
        </StepsForm.StepForm>
        <StepsForm.StepForm<{
          checkbox: string;
        }>
          name="checkbox"
          title="选择风格"
          stepProps={{
            // description: '这里填入运维参数',
          }}
          onFinish={async () => {
            console.log(formRef.current?.getFieldsValue());
            return true;
          }}
        >

        </StepsForm.StepForm>
        <StepsForm.StepForm<{
          checkbox: string;
        }>
          name="step3"
          title="配置项"
          stepProps={{
            // description: '这里填入运维参数',
          }}
          onFinish={async () => {
            console.log(formRef.current?.getFieldsValue());
            return true;
          }}
        >

        </StepsForm.StepForm>
      </StepsForm> */}

      {/* <ProFormGroup
          title="步骤一"
          collapsible
        >
        
</ProFormGroup>
<ProFormGroup
          title="步骤二"
        >
<ProFormSelect
            name="select"
            label="二、样式"
            showSearch
            debounceTime={300}
            placeholder="选择样式"
            rules={[{ required: true, message: '选择一个样式' }]}
          />
          </ProFormGroup>
         <ProFormText
        width="md"
        name="name"
        label="样式"
        tooltip="最长为 24 位"
        placeholder="请输入名称"
      /> */}
    </div>
  );
};

const WebBrowserComponent: React.FC<{ webUrl: string }> = ({ webUrl }) => {
  return (
    <ProDescriptions
      title="模拟浏览"
      column={1}
      columns={[
        {
          title: '地址',
          key: 'text',
          dataIndex: 'webUrl',
          copyable: true,
          ellipsis: true,
        },
      ]}
      dataSource={{
        webUrl: webUrl,
      }}
    >
      <iframe
        className={styles.iframe}
        title="web-browser-component"
        src={webUrl}
        width="100%"
        height="400vh"
        sandbox="allow-same-origin allow-scripts allow-popups"
      />
    </ProDescriptions>
  );
};

const ConfigPage: React.FC = () => {
  // 计算兼容publicPath
  const baseUrl = `${
    window.location.origin
  }${window.location.pathname.substring(
    0,
    window.location.pathname.indexOf('config'),
  )}`;

  const renderUrl = `${baseUrl}render`;

  //设置传递状态
  const [configFilePath] = useState<string>(`${baseUrl}api/v1/config`);
  const [webUrl, setWeburl] = useState<string>(
    `${renderUrl}?config=${configFilePath}`,
  );
  const handleChangeWebUrl = (e: { currentTarget: any }) => {
    setWeburl(`${renderUrl}?config=${e.currentTarget.value}`);
  };

  return (
    <PageContainer ghost>
      <ProCard direction="column" ghost>
        <ProCard gutter={16} ghost style={{ height: 300 }} layout="center" wrap>
          <ProCard colSpan={{ md: 6 }} layout="center">
            <ConfigPanel
              configFilePath={configFilePath}
              handleChangeWebUrl={handleChangeWebUrl}
            />
          </ProCard>
          <ProCard colSpan={{ md: 18 }}>
            <WebBrowserComponent webUrl={webUrl} />
          </ProCard>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default ConfigPage;

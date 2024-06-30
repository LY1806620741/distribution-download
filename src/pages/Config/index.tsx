import {
  PageContainer,
  ProCard,
  ProDescriptions,
  // ProForm,
  // ProFormSwitch,
  ProFormInstance,
  ProFormSegmented,
  ProFormText,
  // ProFormSelect,
  // ProFormGroup,
  StepsForm,
} from '@ant-design/pro-components';
// import { Button, message } from 'antd';
// import {useLocation} from 'umi';
import React, { useRef, useState } from 'react';

const ConfigPanel: React.FC<{ baseUrl: string; handleWebUrlChange: any }> = ({
  baseUrl,
  handleWebUrlChange,
}) => {
  const formRef = useRef<ProFormInstance>();
  const configFilePath = `${baseUrl}api/v1/config`;
  const renderUrl = `${baseUrl}/render`;
  // useEffect(() => {
  //   // 如果需要在组件挂载时初始化输入框，可以在这里调用一次onTextChange
  //   // 注意：这取决于你的业务需求，通常情况下不需要这样做
  //   handleWebUrlChange(configFilePath);
  // }, []);
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
        formRef={formRef}
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
            onChange={() => {
              handleWebUrlChange(`${renderUrl}?config=${configFilePath}`);
            }}
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
  // const [url, setUrl] = useState(
  //   weburl,
  // ); // 初始URL

  // const handleInputChange = (e) => {
  //   // 更新URL状态，注意需要做一些基本的安全检查，比如阻止JavaScript注入等
  //   const newUrl = e.target.value;
  //   setUrl(newUrl);
  // };

  return (
    <ProDescriptions
      title="模拟浏览"
      // request={async () => {
      //   return Promise.resolve({
      //     success: true,
      //     data: {
      //       url: webUrl,
      //     },
      //   });
      // }}
      column={1}
      columns={[
        {
          title: '地址',
          key: 'text',
          dataIndex: webUrl,
          copyable: true,
          ellipsis: true,
        },
      ]}
    >
      <iframe
        title="web-browser-component"
        src={webUrl}
        width="100%"
        height="400vh"
        frameBorder="0"
        sandbox="allow-same-origin allow-scripts allow-popups"
      />
    </ProDescriptions>
  );
};

const ConfigPage: React.FC = () => {
  const [baseUrl] = useState(
    `${window.location.origin}${window.location.pathname.substring(
      0,
      window.location.pathname.indexOf('config'),
    )}`,
  );
  const [webUrl, setWeburl] = useState<string>('');
  const handleWebUrlChange = (text: string) => {
    setWeburl(text);
  };
  return (
    <PageContainer ghost>
      <ProCard direction="column" ghost>
        <ProCard gutter={16} ghost style={{ height: 300 }} layout="center" wrap>
          <ProCard colSpan={{ md: 6 }} layout="center">
            <ConfigPanel
              baseUrl={baseUrl}
              handleWebUrlChange={handleWebUrlChange}
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

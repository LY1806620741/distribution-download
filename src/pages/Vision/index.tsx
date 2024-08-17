import { PageContainer } from '@ant-design/pro-components';
import { Typography } from 'antd';

const { Paragraph } = Typography;

const VisionPage: React.FC = () => {
  return (
    <PageContainer ghost>
      <Paragraph>
        为开源的软件进行不同平台，不同架构的分发下载，主要是帮助用户选择github上的release，提供不同风格的配置化模板
      </Paragraph>
    </PageContainer>
  );
};

export default VisionPage;

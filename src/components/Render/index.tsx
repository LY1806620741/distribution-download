import { Typography } from 'antd';
import UAParser from 'ua-parser-js';

const { Paragraph } = Typography;

export const DebugPanel = (data: any) => {
  const parser = new UAParser();
  const result = parser.getResult();
  return (
    <Typography style={{ whiteSpace: 'pre-wrap' }}>
      <Paragraph>{JSON.stringify(result, null, 4)}</Paragraph>
      <Paragraph>{JSON.stringify(data, null, 4)}</Paragraph>
    </Typography>
  );
};

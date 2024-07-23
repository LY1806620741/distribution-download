import { Typography, Watermark } from 'antd';
import UAParser from 'ua-parser-js';
import styles from './index.less';

const { Text, Title } = Typography;

export const DebugPanel = (data: any) => {
  const parser = new UAParser();
  const result = parser.getResult();
  return (
    <Watermark content="debug" className={styles.debugPanel}>
      <Typography>
        <Title>platform</Title>
        <Text code>{JSON.stringify(result, null, 4)}</Text>
        <Title>config</Title>
        <Text code>{JSON.stringify(data, null, 4)}</Text>
      </Typography>
    </Watermark>
  );
};

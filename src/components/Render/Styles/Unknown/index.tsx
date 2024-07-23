import { Space, Typography } from 'antd';
import React from 'react';

const { Text } = Typography;

type ConfigProps = {
  style: string;
};

const Unknown: React.FC<{ config: ConfigProps }> = ({ config }) => {
  return (
    <Space direction="vertical">
      <Text type="danger">未知的风格:{config.style},是否配置错误？</Text>
    </Space>
  );
};

export default Unknown;

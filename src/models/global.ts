// 全局共享数据示例
import { CRITERIA } from '@/constants';
import { useState } from 'react';

const global = () => {
  const [name, setName] = useState<string>(CRITERIA);
  return {
    name,
    setName,
  };
};

export default global;

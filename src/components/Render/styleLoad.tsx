import React, { FC, lazy } from 'react';

// 动态加载组件
const styleMap = new Map();
styleMap.set(
  'VscodeSimilar',
  lazy(() => import('./Styles/VscodeSimilar')),
);
styleMap.set(
  'Unknown',
  lazy(() => import('./Styles/Unknown')),
);

export const DynamicStyleComponent: React.FC<{ config: any }> = ({
  config,
}) => {
  const [Component, setComponent] = React.useState<FC<any>>();
  React.useEffect(() => {
    let style = styleMap.get(config.style);
    if (style) {
      setComponent(style);
    } else {
      style = styleMap.get('Unknown');
      setComponent(style);
    }
  }, [config.style]);

  return Component ? <Component config={config} /> : null;
};

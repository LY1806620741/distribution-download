import React, { FC } from 'react';
import VscodeSimilar from './Styles/VscodeSimilar';

const loadComponent = async (styleName: string): Promise<FC<any>> => {
  // let modulePath = '@/components/Render/Styles/';
  let modulePath = './Styles/' + styleName;
  modulePath += styleName;
  console.log(modulePath);

  //   const { default: Component } = await import(modulePath);
  return VscodeSimilar;
};

export const DynamicStyleComponent: React.FC<{ config: any }> = ({
  config,
}) => {
  const [Component, setComponent] = React.useState<FC<any>>();

  React.useEffect(() => {
    loadComponent(config.style).then(setComponent);
  }, [config.style]);

  return Component ? <Component config={config} /> : null;
};

import { defineConfig } from '@umijs/max';

export default defineConfig({
  //github page mark
  // runtimePublicPath: {},
  antd: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '应用下载分发',
    antd: true,
  },
  locale: {
    // 默认使用 src/locales/zh-CN.ts 作为多语言文件
    default: 'zh-CN',
    baseSeparator: '-',
    title: true,
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'index',
      path: '/home',
      component: './Home',
    },
    {
      name: 'config',
      path: '/config',
      component: './Config',
    },
    {
      layout: false,
      name: 'render',
      path: '/render',
      component: './Render',
    },
  ],
  npmClient: 'pnpm',
});

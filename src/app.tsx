// 运行时配置
import { Github } from '@/components/Base';
import { SelectLang } from '@@/plugin-locale';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ title: string }> {
  return { title: '应用下载分发' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: true,
    },
    layout: 'top',
    rightRender: () => {
      return (
        <>
          <SelectLang />
          {/* layout rightRender 会导致组件重新渲染 */}
          <Github
            repository="LY1806620741/distribution-download"
            showTag="0.0.1.pre"
            showStarsNum
            showForksNum
          />
        </>
      );
    },
  };
};

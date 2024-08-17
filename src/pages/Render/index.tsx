import { DebugPanel } from '@/components/Render';

import { DynamicStyleComponent } from '@/components/Render/styleLoad';
import YAML from 'js-yaml';
import { useEffect, useState } from 'react';
import { getLocale } from 'umi';

export default () => {
  const [yamlData, setYamlData] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    async function fetchYamlContent() {
      const configFileUrl = searchParams.get('config');
      if (!configFileUrl) return;
      try {
        const response = await fetch(configFileUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        try {
          // 使用js-yaml的safeLoad或safeLoadAll方法解析YAML字符串
          const parsedYaml = YAML.load(data);
          // merge 其他参数
          searchParams.forEach((value, key) => {
            if (key !== 'config') {
              if (!value) {
                parsedYaml[key] = 'true';
              } else {
                parsedYaml[key] = value;
              }
            }
          });
          // load languege if set language
          if (parsedYaml.lang) {
            let configFile = parsedYaml.lang.find(
              (e) => e.lang === getLocale(),
            )?.configFile;
            if (configFile) {
              let configPath;
              if (configFile.indexOf('/') > 0) {
                configPath = configFile;
              } else {
                //relative path
                let lastSlashIndex = configFileUrl.lastIndexOf('/');
                configPath =
                  configFileUrl.substring(0, lastSlashIndex + 1) + configFile;
              }

              const response = await fetch(configPath);
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              const langData = YAML.load(await response.text());
              setYamlData({
                ...parsedYaml,
                ...langData,
              });
              return;
            }
            // if (getLocale() in parsedYaml.lang.key){
            //   console.log(configFileUrl);
            //   console.log(parsedYaml?.lang?.en);
            // }
          }

          setYamlData(parsedYaml);
        } catch (e) {
          console.error('Error parsing YAML:', e);
        }
      } catch (error) {
        console.error('Error fetching YAML content:', error);
      }
    }

    fetchYamlContent();
  }, []); // 空数组作为依赖，确保只在组件挂载时运行一次

  if (!yamlData) return <div>Loading...</div>;

  return (
    <>
      {yamlData.debug && <DebugPanel data={{ yamlData: yamlData }} />}

      <DynamicStyleComponent config={yamlData} />
    </>
  );
};

import { PageContainer, ProCard } from '@ant-design/pro-components';
import YAML from 'js-yaml';
import { useEffect, useState } from 'react';

export default () => {
  const [yamlData, setYamlData] = useState(null);

  useEffect(() => {
    async function fetchYamlContent() {
      const searchParams = new URLSearchParams(window.location.search);
      const configFileUrl = searchParams.get('config');
      if (!configFileUrl) return;
      try {
        console.log(configFileUrl);
        const response = await fetch(configFileUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        try {
          // 使用js-yaml的safeLoad或safeLoadAll方法解析YAML字符串
          const parsedYaml = YAML.load(data);
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

  console.log(yamlData);

  return (
    <div
      style={{
        background: '#F5F7FA',
      }}
    >
      <PageContainer>
        <ProCard direction="column" ghost>
          <ProCard
            gutter={16}
            ghost
            style={{ height: 300 }}
            layout="center"
            wrap
          >
            <ProCard
              colSpan={{ md: yamlData.showImage ? 4 : 24 }}
              layout="center"
            ></ProCard>
            {yamlData ? (
              yamlData.showImage ? (
                <ProCard colSpan={{ md: 8 }} />
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
          </ProCard>
        </ProCard>
      </PageContainer>
    </div>
  );
};

import { PageContainer, ProCard } from '@ant-design/pro-components';

export default () => {
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
            <ProCard colSpan={{ md: 4 }} layout="center"></ProCard>
            <ProCard colSpan={{ md: 8 }} />
          </ProCard>
        </ProCard>
      </PageContainer>
    </div>
  );
};

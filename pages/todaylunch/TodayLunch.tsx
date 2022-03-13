import { TodayLunch as Component } from 'components/Pages';
import { HeadWrapper } from 'components/common';
import { orderService } from 'backend/services';

const TodayLunch = (props: any) => {
  return (
    <>
      <HeadWrapper
        metaTemplate={{
          html: {
            title: '오늘의 점심은',
            description: '점심 메뉴 파티를 구하기 위한 간단 서비스',
          },
        }}
      />
      <Component />
    </>
  );
};

export async function getServerSideProps(context: any) {
  const orderInfoList = await orderService.getOrderInfo();
  return {
    props: { orderInfoList },
  };
}

export default TodayLunch;

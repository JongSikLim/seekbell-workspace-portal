import { TodayLunch as Component } from 'components/Pages';
import { HeadWrapper } from 'components/common';
import { orderService } from 'backend/services';

const TodayLunch = (props: any) => {
  console.log('props: ', props);
  return (
    <>
      <HeadWrapper />
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

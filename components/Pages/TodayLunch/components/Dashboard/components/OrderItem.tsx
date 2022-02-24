import { Button, Card } from 'antd';
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  Page,
  selectCafeteriaIdState,
  selectOrderIdState,
  stepState,
} from 'recoils/atoms/todaylunch';
import { userInfoState } from 'recoils/atoms/user';
import OrderDetailItem from './OrderDetailItem';

type OrderItemType = {
  order: {
    order_id: string;
    order_state: string;
    order_date: Date;
    Cafeteria: {
      cafeteria_id: string;
      cafeteria_name: string;
    };
    order_user: {
      user_id: string;
      name: string;
    };
    Order_detail: any[];
  };
};

const OrderItem: React.FC<OrderItemType> = ({ order }) => {
  const userInfo = useRecoilValue(userInfoState);
  const setStep = useSetRecoilState(stepState);
  const setSelectCafeteria = useSetRecoilState(selectCafeteriaIdState);
  const setSelectOrderId = useSetRecoilState(selectOrderIdState);

  const isOwner = order.order_user.user_id === userInfo?.user_id;

  const {
    order_id,
    order_user: { name },
    Cafeteria: { cafeteria_name, cafeteria_id },
    Order_detail,
  } = order;

  const orderListElements = Order_detail.map((orderDetail) => {
    const { order_detail_id } = orderDetail;
    return <OrderDetailItem key={order_detail_id} orderDetail={orderDetail} />;
  });

  /**
   * 상세보기 클릭
   */
  const handleClickDetailView = () => {
    setSelectOrderId(order_id);
    setSelectCafeteria(cafeteria_id);
    setStep(Page.ORDER_INFO);
  };

  /**
   * 참여하기 클릭
   */
  const handleClickMoreview = () => {
    setSelectOrderId(order_id);
    setSelectCafeteria(cafeteria_id);
    setStep(Page.CHOICE_MENU);
  };

  return (
    <Card
      title={
        <>
          <p>{cafeteria_name}</p>
          <p>{`총무: ${name}`}</p>
        </>
      }
      extra={
        isOwner ? (
          <Button type="link" onClick={handleClickDetailView}>
            상세보기
          </Button>
        ) : (
          <Button type="link" onClick={handleClickMoreview}>
            참여하기
          </Button>
        )
      }
      style={{ width: 300 }}
    >
      {orderListElements}
    </Card>
  );
};

export default OrderItem;

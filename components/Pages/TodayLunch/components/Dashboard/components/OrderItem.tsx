import { OrderState } from '@prisma/client';
import { Button, Card, Tag } from 'antd';
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  Page,
  selectCafeteriaIdState,
  selectOrderIdState,
  stepState,
} from 'recoils/atoms/todaylunch';
import { userInfoState } from 'recoils/atoms/user';
import Styles from 'styles/Pages/TodayLunch.module.scss';
import OrderDetailItem from './OrderDetailItem';

type OrderItemType = {
  order: {
    order_id: string;
    order_state: OrderState;
    order_date: Date;
    cafeteria: {
      cafeteria_id: string;
      cafeteria_name: string;
    };
    user: {
      user_id: string;
      name: string;
    };
    orderDetails: any[];
  };
};

const MAX_ORDER_ITEM_VIEW_COUNT = 4;

const OrderItem: React.FC<OrderItemType> = ({ order }) => {
  const userInfo = useRecoilValue(userInfoState);
  const setStep = useSetRecoilState(stepState);
  const setSelectCafeteria = useSetRecoilState(selectCafeteriaIdState);
  const setSelectOrderId = useSetRecoilState(selectOrderIdState);

  const {
    order_id,
    order_state,
    user: { name },
    cafeteria: { cafeteria_name, cafeteria_id },
    orderDetails,
  } = order;

  const isClosed = order_state === 'COMPLETED';
  const isOwner = order.user.user_id === userInfo?.user_id;
  const isOverViewMaxCount = orderDetails.length > MAX_ORDER_ITEM_VIEW_COUNT;
  const moreOrderDetailCount = orderDetails.length - MAX_ORDER_ITEM_VIEW_COUNT;

  const orderListElements = orderDetails
    .slice(0, MAX_ORDER_ITEM_VIEW_COUNT)
    .map((orderDetail) => {
      const { order_detail_id } = orderDetail;
      return (
        <OrderDetailItem key={order_detail_id} orderDetail={orderDetail} />
      );
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
      id={Styles.orderItemCard}
      title={
        <>
          <p>{cafeteria_name}</p>
          <p>{`총무: ${name}`}</p>
          {isClosed && <Tag color={'#364659'}>주문완료</Tag>}
        </>
      }
      extra={
        <Button type="link" onClick={handleClickDetailView}>
          상세보기
        </Button>
      }
      style={{ width: 300 }}
      bodyStyle={{
        padding: 12,
      }}
    >
      <div>{orderListElements}</div>
      {isOverViewMaxCount && (
        <div style={{ textAlign: 'right', marginTop: 10 }}>
          외 {moreOrderDetailCount}명
        </div>
      )}
    </Card>
  );
};

export default OrderItem;

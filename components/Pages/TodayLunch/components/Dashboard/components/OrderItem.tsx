import { Button, Card } from 'antd';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import {
  Page,
  selectCafeteriaIdState,
  stepState,
} from 'recoils/atoms/todaylunch';

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
  const setStep = useSetRecoilState(stepState);
  const setSelectCafeteria = useSetRecoilState(selectCafeteriaIdState);
  const {
    Cafeteria: { cafeteria_name, cafeteria_id },
    Order_detail,
  } = order;

  const orderListElements = Order_detail.map((orderDetail, index) => {
    return <p>{index}</p>;
  });

  const handleClickMoreview = () => {
    setSelectCafeteria(cafeteria_id);
    setStep(Page.CHOICE_MENU);
  };

  return (
    <Card
      title={cafeteria_name}
      extra={
        <Button type="link" onClick={handleClickMoreview}>
          참여하기
        </Button>
      }
      style={{ width: 300 }}
    >
      {orderListElements}
    </Card>
  );
};

export default OrderItem;

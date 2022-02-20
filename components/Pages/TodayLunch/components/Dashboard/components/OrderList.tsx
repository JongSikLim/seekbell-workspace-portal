import React from 'react';
import { useMemo } from 'react';
import { OrderItem } from '.';

type OrderListType = {
  orderList: any[];
};

const OrderList: React.FC<OrderListType> = ({ orderList }) => {
  const orderListElements = useMemo(
    () =>
      orderList.map((_order) => {
        const { order_id } = _order;

        return <OrderItem key={order_id} order={_order} />;
      }),
    [orderList]
  );

  return <>{orderListElements}</>;
};

export default OrderList;

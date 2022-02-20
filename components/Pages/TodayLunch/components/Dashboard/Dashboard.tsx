import { FieldTimeOutlined } from '@ant-design/icons';
import { Order } from '@prisma/client';
import { Button, Empty, Skeleton } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import React, { useLayoutEffect, useMemo } from 'react';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { orderListState } from 'recoils/atoms/todaylunch';
import { Page, stepState } from 'recoils/atoms/todaylunch';
import commonAxios from 'utils/apiHelper';
import { OrderList } from './components';

const Dashboard = (props: any) => {
  console.log('props: ', props);
  const setOrderList = useSetRecoilState(orderListState);
  const { state: orderListStatus, contents: orderListContents } =
    useRecoilValueLoadable<Order[]>(orderListState);

  const setStep = useSetRecoilState(stepState);

  const orderElements = useMemo(() => {
    let _elements;

    switch (orderListStatus) {
      case 'loading':
        _elements = <Skeleton />;
        break;
      case 'hasValue':
        if (orderListContents.length > 0) {
          _elements = <OrderList orderList={orderListContents} />;
        } else {
          _elements = <Empty />;
        }
        break;
      case 'hasError':
        _elements = <>{'에러'}</>;
        break;
    }

    return _elements;
  }, [orderListStatus]);

  useLayoutEffect(() => {
    commonAxios.get('order/getOrderInfo').then((res) => {
      setOrderList(res);
    });
  }, []);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h1></h1>
        <ButtonGroup>
          <Button icon={<FieldTimeOutlined />}>히스토리</Button>
          <Button type="primary" onClick={() => setStep(Page.ORDER)}>
            주문하기
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <div className="row-box">
          <h1>주문 중인 내역</h1>
          <div>{orderElements}</div>
        </div>
        <div className="row-box">
          <h1>어제 주문한 내역</h1>
          <div>{orderElements}</div>
        </div>
        <div className="row-box">
          <h1>오래된 내역</h1>
          <div>{orderElements}</div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context: any) {
  return {
    props: { temp: 1 },
  };
}

export default Dashboard;

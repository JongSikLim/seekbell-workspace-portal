import { FieldTimeOutlined } from '@ant-design/icons';
import { Order } from '@prisma/client';
import { Button, Empty, Skeleton } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import CButton from 'components/common/CButton';
import React, { useEffect, useLayoutEffect, useMemo } from 'react';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { orderListState } from 'recoils/atoms/todaylunch';
import { Page, stepState } from 'recoils/atoms/todaylunch';
import commonAxios from 'utils/apiHelper';
import Styles from 'styles/Pages/TodayLunch.module.scss';
import { OrderList } from './components';

const Dashboard = (props: any) => {
  //#region states
  const setOrderList = useSetRecoilState(orderListState);
  const { state: orderListStatus, contents: orderListContents } =
    useRecoilValueLoadable<Order[]>(orderListState);
  const setStep = useSetRecoilState(stepState);
  //#endregion


  //#region hooks
  /**
   * 주문 요소 리스트
   */
  const activateOrderElements = useMemo(() => {
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
  }, [orderListStatus, orderListContents]);

  useEffect(() => {
    commonAxios.get('order/getOrderInfo').then((res) => {
      setOrderList(res);
    });
  }, []);
  //#endregion

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
          <CButton icon={<FieldTimeOutlined />} handleClick={() => { }}>
            히스토리
          </CButton>
          <CButton type="primary" handleClick={() => setStep(Page.ORDER)}>
            주문하기
          </CButton>
        </ButtonGroup>
      </div>
      <div>
        <div className="row-box">
          <h1>주문 중인 내역</h1>
          <div className={Styles.order_card_row}>{activateOrderElements}</div>
        </div>
        <div className="row-box">
          <h1>어제 주문한 내역</h1>
          <Empty />
          {/* <div>{orderElements}</div> */}
        </div>
        <div className="row-box">
          <h1>오래된 내역</h1>
          <Empty />
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

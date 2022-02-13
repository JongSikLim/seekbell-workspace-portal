import { FieldTimeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import React, { useMemo } from 'react';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { orderListState } from 'recoils/atoms/main';
import { Page, stepState } from 'recoils/atoms/todaylunch';

const Dashboard = () => {
  const { state: orderListStatus, contents: orderListContents } =
    useRecoilValueLoadable(orderListState);

  const setStep = useSetRecoilState(stepState);

  const orderElements = useMemo(() => {
    switch (orderListStatus) {
      case 'loading':
        return <>{'로딩중'}</>;
      case 'hasValue':
        console.log('orderListContents: ', orderListContents);
        return <>{orderListContents}</>;
      case 'hasError':
        return <>{'에러'}</>;
    }
  }, [orderListStatus]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h1>주문 내역</h1>
        <ButtonGroup>
          <Button icon={<FieldTimeOutlined />}>히스토리</Button>
          <Button onClick={() => setStep(Page.ORDER)}>주문하기</Button>
        </ButtonGroup>
      </div>
      <div>{orderElements}</div>
    </>
  );
};

export default Dashboard;

import React, { useMemo } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { orderListState } from 'recoils/atoms/main';

const TodayLunch = () => {
  const { state: orderListStatus, contents: orderListContents } =
    useRecoilValueLoadable(orderListState);

  const orderElements = useMemo(() => {
    switch (orderListStatus) {
      case 'loading':
        return <>{'로딩중'}</>;
      case 'hasValue':
        return <>{orderListContents}</>;
      case 'hasError':
        return <>{'에러'}</>;
    }
  }, [orderListStatus]);

  return (
    <div>
      <div>
        <h1>주문히스토리</h1>
      </div>

      <div>{orderElements}</div>
    </div>
  );
};

export default TodayLunch;

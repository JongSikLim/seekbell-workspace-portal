import { FieldTimeOutlined } from '@ant-design/icons';
import { Empty, Switch } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import CButton from 'components/common/CButton';
import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';
import { useSetRecoilState } from 'recoil';
import { orderListState, Page, stepState } from 'recoils/atoms/todaylunch';
import Styles from 'styles/Pages/TodayLunch.module.scss';
import commonAxios from 'utils/apiHelper';
import { OrderList } from './components';

const Dashboard = () => {
  //#region states
  const setOrderList = useSetRecoilState(orderListState);
  const setStep = useSetRecoilState(stepState);

  const [todayOrderList, setTodayOrderList] = useState<any[]>([]);
  const [yesterdayOrderList, setYesterdayOrderList] = useState<any[]>([]);
  const [filterState, setFilterState] = useState<boolean>(true);
  //#endregion

  //#region hooks
  const todayFilterOrderList = useMemo(() => {
    let result;

    if (filterState) {
      result = todayOrderList.filter((order) => {
        const { order_state } = order;
        return order_state === 'PENDING';
      });
    } else {
      result = todayOrderList;
    }

    return result;
  }, [todayOrderList, filterState]);

  useEffect(() => {
    commonAxios.get('order/getOrderInfo').then((res) => {
      setOrderList(res);
    });

    commonAxios.get('order/todayOrderInfo').then((res) => {
      setTodayOrderList(res);
    });

    commonAxios.get('order/yesterdayOrderInfo').then((res) => {
      setYesterdayOrderList(res);
    });
  }, []);
  //#endregion

  //#region render
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
          <CButton icon={<FieldTimeOutlined />} handleClick={() => {}}>
            히스토리
          </CButton>
          <CButton type="primary" handleClick={() => setStep(Page.ORDER)}>
            주문하기
          </CButton>
        </ButtonGroup>
      </div>
      <div className={Styles.scroll_box}>
        <div className={Styles.row_box}>
          <h2>
            오늘 주문한 내역
            <Switch
              checkedChildren="모집중"
              unCheckedChildren="전체"
              checked={filterState}
              onChange={(value) => setFilterState(value)}
            />
          </h2>
          <div className={Styles.order_card_row}>
            {todayOrderList.length > 0 ? (
              <OrderList orderList={todayFilterOrderList} />
            ) : (
              <Empty />
            )}
          </div>
        </div>
        <div className={Styles.row_box}>
          <h2>어제 주문한 내역</h2>
          <div className={Styles.order_card_row}>
            {yesterdayOrderList.length > 0 ? (
              <OrderList orderList={yesterdayOrderList} />
            ) : (
              <Empty />
            )}
          </div>
        </div>
        <div className={Styles.row_box}>
          <h2>오래된 내역</h2>
          <Empty />
        </div>
      </div>
    </>
  );
  //#endregion
};

export default Dashboard;

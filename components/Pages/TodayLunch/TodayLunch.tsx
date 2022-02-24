import { useRouter } from 'next/router';
import React, { useLayoutEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { Page, stepState } from 'recoils/atoms/todaylunch';
import { userInfoState } from 'recoils/atoms/user';
import {
  Dashboard,
  History,
  NewCafeteria,
  Order,
  ChoiceMenu,
} from './components';
import OrderInfo from './components/OrderInfo';

const TodayLunch = (props: any) => {
  const router = useRouter();
  const step = useRecoilValue(stepState);
  const userInfo = useRecoilValue(userInfoState);

  useLayoutEffect(() => {
    if (!userInfo) {
      // message.warning('로그인이 필요한 서비스입니다.');
      router.push('/login');
    }
  }, []);

  return (
    <div style={{ height: '100%' }}>
      {step === Page.DASHBOARD && <Dashboard />}
      {step === Page.HISTORY && <History />}
      {step === Page.ORDER && <Order />}
      {step === Page.NEW_CAFETERIA && <NewCafeteria />}
      {step === Page.CHOICE_MENU && <ChoiceMenu />}
      {step === Page.ORDER_INFO && <OrderInfo />}
    </div>
  );
};

export default TodayLunch;

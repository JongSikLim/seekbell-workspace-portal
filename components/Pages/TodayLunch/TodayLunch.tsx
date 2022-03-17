// import { useRouter } from 'next/router';
// import React, { useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import { useLayoutEffect, useMemo } from 'react';
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

const TodayLunch = () => {
  const router = useRouter();
  const step = useRecoilValue(stepState);
  const userInfo = useRecoilValue(userInfoState);

  useLayoutEffect(() => {
    if (!userInfo) {
      // message.warning('로그인이 필요한 서비스입니다.');
      router.push('/login');
    }
  }, []);

  const $page = useMemo(() => {
    let _element = <></>;

    if (step === Page.NULL) { _element = <>loading</> }
    else if (step === Page.DASHBOARD) { _element = <Dashboard /> }
    else if (step === Page.HISTORY) { _element = <History /> }
    else if (step === Page.ORDER) { _element = <Order /> }
    else if (step === Page.NEW_CAFETERIA) { _element = <NewCafeteria /> }
    else if (step === Page.CHOICE_MENU) { _element = <ChoiceMenu /> }
    else if (step === Page.ORDER_INFO) { _element = <OrderInfo /> }

    return _element;
  }, [step])

  return (
    <div>
      {$page}
    </div>
  );
};

export default TodayLunch;

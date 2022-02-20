import { useRouter } from 'next/router';
import React, { useLayoutEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { Page, stepState } from 'recoils/atoms/todaylunch';
import { userInfoState } from 'recoils/atoms/user';
import { Dashboard, History, Order } from './components';
import ChioceMenu from './components/ChoiceMenu';
import NewCafeteria from './components/NewCafeteria';

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
    <div>
      {step === Page.DASHBOARD && <Dashboard />}
      {step === Page.HISTORY && <History />}
      {step === Page.ORDER && <Order />}
      {step === Page.NEW_CAFETERIA && <NewCafeteria />}
      {step === Page.CHOICE_MENU && <ChioceMenu />}
    </div>
  );
};

export default TodayLunch;

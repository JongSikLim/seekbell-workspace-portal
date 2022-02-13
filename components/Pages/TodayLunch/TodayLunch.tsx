import React from 'react';
import { useRecoilValue } from 'recoil';
import { Page, stepState } from 'recoils/atoms/todaylunch';
import { Dashboard, History, Order } from './components';
import NewCafeteria from './components/NewCafeteria';

const TodayLunch = () => {
  const step = useRecoilValue(stepState);

  return (
    <div>
      {step === Page.DASHBOARD && <Dashboard />}
      {step === Page.HISTORY && <History />}
      {step === Page.ORDER && <Order />}
      {step === Page.NEW_CAFETERIA && <NewCafeteria />}
    </div>
  );
};

export default TodayLunch;

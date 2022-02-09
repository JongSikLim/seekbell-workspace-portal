import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { TodayLunch } from './components';

const Contents = () => {
  const { pathname } = useRouter();

  const innerPage = useMemo(() => {
    return <TodayLunch />;
  }, [pathname]);

  return <div>{innerPage}</div>;
};

export default Contents;

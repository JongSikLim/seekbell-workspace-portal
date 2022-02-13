// import dynamic from 'next/dynamic';
// import { Main as MainPage } from 'components/Pages';

// const MainPage = dynamic(() => import('components/Pages/Main'), { ssr: false });

import { Main as Component } from 'components/Pages';
import { HeadWrapper } from 'components/common';

const Main = () => {
  return (
    <>
      <HeadWrapper />
      <Component />
    </>
  );
};

export default Main;

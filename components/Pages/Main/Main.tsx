import { MainLayout } from 'components/layout';
import React from 'react';
import { Contents, Footer, Header, LNB } from './components';

const Main = () => {
  return (
    <MainLayout
      {...{
        lnb: <LNB />,
        header: <Header />,
        contents: <Contents />,
        footer: <Footer />,
      }}
    />
  );
};

export default Main;

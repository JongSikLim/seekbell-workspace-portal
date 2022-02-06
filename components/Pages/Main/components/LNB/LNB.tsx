import React from 'react';
import Styles from 'styles/Pages/Main.module.scss';
import { Footer, MenuBox } from './components';
import Title from './components/Title';

const { lnb } = Styles;

const LNB = () => {
  return (
    <div className={lnb}>
      <Title />
      <MenuBox />
      <Footer />
    </div>
  );
};

export default LNB;

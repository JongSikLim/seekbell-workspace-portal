import React from 'react';
import { LayoutComponent } from '../../types';
import Styles from 'styles/Pages/Main.module.scss';
import { Footer, MenuBox, Title } from './components';

const LNB: LayoutComponent = ({ children }) => {
  return (
    <div className={Styles.lnb}>
      <Title />
      <MenuBox />
      <Footer />
    </div>
  );
};

export default LNB;

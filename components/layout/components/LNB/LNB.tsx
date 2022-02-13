import React from 'react';
import { LayoutComponent } from '../../types';
import Styles from 'styles/common/layout.module.scss';
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

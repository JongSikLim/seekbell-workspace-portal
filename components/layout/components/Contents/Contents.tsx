import React from 'react';
import { LayoutComponent } from '../../types';
import Styles from 'styles/common/layout.module.scss';

const Contents: LayoutComponent = ({ children }) => {
  return (
    <div className={Styles['content-container']}>
      <div className={Styles.header}>주문 히스토리</div>
      <div className={Styles.content}>{children}</div>
    </div>
  );
};

export default Contents;

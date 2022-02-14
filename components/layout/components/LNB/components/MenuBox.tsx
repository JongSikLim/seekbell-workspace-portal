import { Collapse } from 'antd';
import React from 'react';
import Styles from 'styles/common/layout.module.scss';

const { Panel } = Collapse;

const MenuBox = () => {
  return (
    <div className={Styles['lnb-content']}>
      <Collapse>
        <Panel header="Service">
          <p>오늘의 점심은?</p>
          <p>랜덤뽑기</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default MenuBox;

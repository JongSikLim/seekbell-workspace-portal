import React from 'react';
import Styles from 'styles/common/layout.module.scss';

const Title: React.FC = () => {
  return (
    <div className={Styles.title}>
      <span>Seekbell playground</span>
      <p className={Styles.subTitle}>Hello All Developers!</p>
    </div>
  );
};

export default Title;

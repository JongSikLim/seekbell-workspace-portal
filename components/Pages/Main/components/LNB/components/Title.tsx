import React from 'react';
import Styles from 'styles/Pages/Main.module.scss';

const Title: React.FC = () => {
  return (
    <div className={Styles.title}>
      <span>seekbell playground</span>
    </div>
  );
};

export default Title;

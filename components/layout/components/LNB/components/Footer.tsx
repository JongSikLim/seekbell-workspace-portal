import { GithubOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import Styles from 'styles/common/layout.module.scss';

const Footer = () => {
  return (
    <div className={Styles['lnb-footer']}>
      <div className={Styles['icon-box']}>
        <Button
          icon={<GithubOutlined />}
          shape={'circle'}
          onClick={() => {
            window.open('https://github.com/jongsiklim');
          }}
        />
      </div>
    </div>
  );
};

export default Footer;

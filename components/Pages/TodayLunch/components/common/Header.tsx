import { CButton } from 'components/common';
import Styles from 'styles/Pages/TodayLunch.module.scss';
import React, { useMemo } from 'react';
import { buttonConfig } from '../../type';
import ButtonGroup from 'antd/lib/button/button-group';

type SubHeaderProps = {
  title: string;
  buttons: buttonConfig[];
};

const Header: React.FC<SubHeaderProps> = ({ title, buttons }) => {
  //#region hooks
  const buttonElements = useMemo(() => {
    return buttons.map((config, index) => {
      const { onClick, text, icon, type } = config;
      return (
        <CButton
          key={index}
          {...{
            icon,
            type,
            handleClick: onClick,
          }}
        >
          {text}
        </CButton>
      );
    });
  }, [buttons]);
  //#endregion

  return (
    <div className={Styles.common_header}>
      <span>{title}</span>
      <ButtonGroup>{buttonElements}</ButtonGroup>
    </div>
  );
};

export default Header;

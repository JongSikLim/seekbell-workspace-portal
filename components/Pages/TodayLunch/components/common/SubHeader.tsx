import ButtonGroup from 'antd/lib/button/button-group';
import React, { useMemo } from 'react';
import Styles from 'styles/Pages/TodayLunch.module.scss';
import { CButton } from 'components/common';
import { buttonConfig } from '../../type';

type SubHeaderProps = {
  subTitle: string;
  buttons: buttonConfig[];
  extra?: React.ReactNode;
};

const SubHeader: React.FC<SubHeaderProps> = ({ subTitle, buttons, extra }) => {
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

  //#region render
  return (
    <div className={Styles.sub_header}>
      <span>{subTitle}</span>
      {extra ? extra : <ButtonGroup>{buttonElements}</ButtonGroup>}
    </div>
  );
  //#endregion
};

export default SubHeader;

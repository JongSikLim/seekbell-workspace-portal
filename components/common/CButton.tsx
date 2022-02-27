import { Button } from 'antd';
import React, { useMemo } from 'react';
import CommonStyles from 'styles/common/component.module.scss';

export type CButtonType = 'primary' | 'danger';

type CButtonProps = {
  icon?: JSX.Element;
  type?: CButtonType;
  block?: boolean;
  handleClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
};

const CButton: React.FC<CButtonProps> = ({
  icon,
  type,
  block = false,
  handleClick,
  children,
}) => {
  const buttonClassName = useMemo(() => {
    let _cName;

    switch (type) {
      case 'primary':
        _cName = CommonStyles.common_button_primary;
        break;
      case 'danger':
        _cName = CommonStyles.common_button_danger;
        break;
      default:
        _cName = CommonStyles.common_button;
        break;
    }

    return _cName;
  }, [type]);

  return (
    <Button
      className={buttonClassName}
      icon={icon}
      block={block}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default CButton;

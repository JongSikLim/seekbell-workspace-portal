import { Button } from 'antd';
import { useMemo } from 'react';
import CommonStyles from 'styles/common/component.module.scss';

type CButtonType = {
  icon?: JSX.Element;
  type?: 'primary' | 'danger';
  handleClick: () => void;
  children: React.ReactNode;
};

const CButton: React.FC<CButtonType> = ({
  icon,
  type,
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
    <Button className={buttonClassName} onClick={handleClick} icon={icon}>
      {children}
    </Button>
  );
};

export default CButton;

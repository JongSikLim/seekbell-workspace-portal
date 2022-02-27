import { CButtonType } from 'components/common/CButton';

export type Menu = {
  id: string;
  name: string;
  price: number;
};

export type buttonConfig = {
  icon?: JSX.Element;
  type?: CButtonType;
  text: string;
  onClick: (e: React.MouseEvent) => void;
};

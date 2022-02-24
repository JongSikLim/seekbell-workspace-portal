import { Cafeteria_menu } from '@prisma/client';
import React from 'react';
import Styles from 'styles/Pages/TodayLunch.module.scss';
type ChoiceMenuItemType = {
  menu: Cafeteria_menu;
  handleClick: () => void;
};
const ChoiceMenuItem: React.FC<ChoiceMenuItemType> = ({
  menu,
  handleClick,
}) => {
  const { menu_title, price } = menu;

  return (
    <div className={Styles.choice_menu_item} onClick={handleClick}>
      <div>{menu_title}</div>
      <div>{price}원</div>
    </div>
  );
};

export default ChoiceMenuItem;

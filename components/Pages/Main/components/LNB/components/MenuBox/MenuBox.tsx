import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { useRecoilState, useRecoilStateLoadable } from 'recoil';
import { MenuListState } from 'recoils/atoms/main';

const MenuBox = () => {
  const [menuList, setMenuList] = useRecoilStateLoadable(MenuListState);

  return (
    <div>
      <button>아아 마이크 테스트</button>
    </div>
  );
};

export default MenuBox;

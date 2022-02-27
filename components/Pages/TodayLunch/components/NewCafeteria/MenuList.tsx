import React, { useMemo } from 'react';
import { Menu } from '../../type';
import MenuItem from './MenuItem';

type MenuListType = React.FC<{
  menuList: Menu[];
  handleChangeMenuList: React.Dispatch<React.SetStateAction<Menu[]>>;
  handleDeleteMenu: (id: string) => () => void;
}>;

const MenuList: MenuListType = ({
  menuList,
  handleChangeMenuList,
  handleDeleteMenu,
}) => {
  const menuListElements = useMemo(() => {
    return menuList.map((menu) => {
      const handleChangeMenu =
        (type: 'price' | 'name') => (value: string | number) => {
          handleChangeMenuList((prev) => {
            return prev.map((_menu) => {
              if (_menu.id === menu.id) {
                return {
                  ...menu,
                  [type]: value,
                };
              } else return _menu;
            });
          });
        };

      return (
        <MenuItem
          key={menu.id}
          menu={menu}
          handleChangeMenu={handleChangeMenu}
          handleDeleteMenu={handleDeleteMenu(menu.id)}
        />
      );
    });
  }, [menuList]);

  return <div>{menuListElements}</div>;
};

export default MenuList;

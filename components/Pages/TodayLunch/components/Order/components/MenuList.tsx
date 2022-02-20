import { Cafeteria_menu } from '@prisma/client';
import { Skeleton } from 'antd';
import { useMemo } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { cafeteriaMenuState } from 'recoils/selectors/todaylunch';
import { MenuItem } from '.';

const MenuList = () => {
  const { state, contents } =
    useRecoilValueLoadable<Cafeteria_menu[]>(cafeteriaMenuState);

  const menuListElements = useMemo(() => {
    let _element;

    switch (state) {
      case 'loading':
        _element = <Skeleton />;
        break;
      case 'hasValue':
        _element = (contents as Cafeteria_menu[]).map((_menu) => (
          <MenuItem key={_menu.menu_id} menu={_menu} />
        ));
        break;
      case 'hasError':
        break;
    }

    return _element;
  }, [state]);

  return <div>{menuListElements}</div>;
};

export default MenuList;

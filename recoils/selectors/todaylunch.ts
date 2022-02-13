import { Cafeteria_menu } from '@prisma/client';
import { selector } from 'recoil';
import { selectCafeteriaState } from 'recoils/atoms/todaylunch';
import commonAxios from 'utils/apiHelper';

export const cafeteriaMenuState = selector<Cafeteria_menu[]>({
  key: 'cafeteriaMenuState',
  get: async ({ get }) => {
    const cafeteria = get(selectCafeteriaState);
    let menus: Cafeteria_menu[] = [];
    if (cafeteria) {
      menus = await commonAxios.get('/cafeteriamenu');
    }
    return menus;
  },
});

import { Cafeteria_menu } from '@prisma/client';
import { selector } from 'recoil';
import { selectCafeteriaIdState } from 'recoils/atoms/todaylunch';
import commonAxios from 'utils/apiHelper';

export const cafeteriaMenuState = selector<Cafeteria_menu[]>({
  key: 'cafeteriaMenuState',
  get: async ({ get }) => {
    const cafeteriaId = get(selectCafeteriaIdState);
    console.log('cafeteriaId: ', cafeteriaId);
    let menus: Cafeteria_menu[] = [];
    if (cafeteriaId) {
      menus = await commonAxios.get('/cafeteriaMenu', {
        id: cafeteriaId,
      });
    }
    return menus;
  },
});

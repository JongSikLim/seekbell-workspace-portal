import { Cafeteria_menu } from '@prisma/client';
import { selector, selectorFamily } from 'recoil';
import {
  menuRefreshTokenState,
  orderListState,
  selectCafeteriaIdState,
  selectOrderIdState,
} from 'recoils/atoms/todaylunch';
import commonAxios from 'utils/apiHelper';

/**
 * 선택된 가게의 메뉴정보
 */
export const cafeteriaMenuState = selector<Cafeteria_menu[]>({
  key: 'cafeteriaMenuState',
  get: async ({ get }) => {
    const cafeteriaId = get(selectCafeteriaIdState);
    const refreshToken = get(menuRefreshTokenState);

    let menus: Cafeteria_menu[] = [];

    if (cafeteriaId) {
      menus = await commonAxios.get('/cafeteriaMenu', {
        id: cafeteriaId,
      });
    }

    return menus;
  },
});

/**
 * 선택된 가게의 메뉴정보
 */
export const cafeteriaMenuRefreshState = selectorFamily<
  Cafeteria_menu[],
  string
>({
  key: 'cafeteriaMenuState',
  get:
    (token) =>
    async ({ get }) => {
      const cafeteriaId = get(selectCafeteriaIdState);

      let menus: Cafeteria_menu[] = [];

      if (cafeteriaId) {
        menus = await commonAxios.get('/cafeteriaMenu', {
          id: cafeteriaId,
        });
      }

      return menus;
    },
});

/**
 * 선택된 주문 정보
 */
export const selectedOrderInfoState = selector<any>({
  key: 'selectedOrderInfoState',
  get: ({ get }) => {
    const orderList = get(orderListState);
    const selectOrderId = get(selectOrderIdState);

    const target = orderList.find((order) => order.order_id === selectOrderId);
    return target;
  },
});

import { Cafeteria_menu } from '@prisma/client';
import { selector } from 'recoil';
import {
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

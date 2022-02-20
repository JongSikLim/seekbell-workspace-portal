import { Cafeteria, Order } from '@prisma/client';
import { atom } from 'recoil';

const sampleOrderList: Order[] = [
  {
    order_id: 'sda',
    order_date: new Date(),
    cafeteria_id_fk: 'sasda',
    order_state: 'COMPLETED',
    user_id_fk: 'sdfa',
  },
];

export enum Page {
  ORDER,
  HISTORY,
  DASHBOARD,
  NEW_CAFETERIA,
  CHOICE_MENU,
}

// 현재 페이지 스텝
export const stepState = atom<Page>({
  key: 'stepState',
  default: Page.DASHBOARD,
});

// 식당 리스트
export const cafeteriaListState = atom<Cafeteria[]>({
  key: 'cafeteriaListState',
  default: [],
});

export const selectCafeteriaIdState = atom<string | undefined>({
  key: 'selectCafeteriaState',
  default: undefined,
});

// 주문내역
export const orderListState = atom<Order[]>({
  key: 'orderListState',
  default: [],
});

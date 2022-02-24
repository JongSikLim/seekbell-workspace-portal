import { Cafeteria, Order } from '@prisma/client';
import { atom } from 'recoil';

export enum Page {
  ORDER,
  HISTORY,
  DASHBOARD,
  NEW_CAFETERIA,
  CHOICE_MENU,
  ORDER_INFO,
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

export const selectOrderIdState = atom<string | undefined>({
  key: 'selectOrderIdState',
  default: undefined,
});

// 주문내역
export const orderListState = atom<Order[]>({
  key: 'orderListState',
  default: [],
});

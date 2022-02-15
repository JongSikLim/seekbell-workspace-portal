import { Cafeteria } from '@prisma/client';
import { atom } from 'recoil';
import commonAxios from 'utils/apiHelper';

export enum Page {
  ORDER,
  HISTORY,
  DASHBOARD,
  NEW_CAFETERIA,
}

// 현재 페이지 스텝
export const stepState = atom<Page>({
  key: 'stepState',
  default: Page.DASHBOARD,
});

// 식당 리스트
export const cafeteriaListState = atom<Cafeteria[]>({
  key: 'cafeteriaListState',
  // default: commonAxios.get('/cafeteria'),
  default: [],
});

export const selectCafeteriaState = atom<Cafeteria | null>({
  key: 'selectCafeteriaState',
  default: null,
});

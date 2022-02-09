import { atom } from 'recoil';
import commonAxios from 'utils/apiHelper';

export const MenuListState = atom<any>({
  key: 'MenuListState',
  default: false,
});

export const orderListState = atom<any>({
  key: 'orderListState',
  default: commonAxios.get(`/order`),
});

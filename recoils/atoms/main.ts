import { atom } from 'recoil';
import commonAxios from 'utils/apiHelper';

export const MenuListState = atom<any>({
  key: 'MenuListState',
  default: commonAxios.get(),
});

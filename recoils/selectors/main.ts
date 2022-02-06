import { selector } from 'recoil';

export const textSelectorState = selector<boolean>({
  key: 'textSelectorState',
  get: ({ get }) => {
    return false;
  },
});

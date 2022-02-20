import { User } from '@prisma/client';
import { atom } from 'recoil';

export const userInfoState = atom<User | undefined>({
  key: 'userInfoState',
  default: undefined,
});

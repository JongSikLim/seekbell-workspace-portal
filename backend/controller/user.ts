import { Prisma } from '@prisma/client';
import { userService } from '../services';
import { Methods } from './type';

const categoryController: Methods = {
  GET: async () => {
    return await userService.GET();
  },
  POST: async (item: Prisma.UserCreateInput) => {
    return await userService.POST(item);
  },
  PATCH: async (item: Prisma.UserUpdateInput) => {
    return await userService.PATCH(item);
  },
  DELETE: async (id: string) => {
    return await userService.DELETE(id);
  },
  login: async (body: { id: string; password: string }) => {
    return await userService.login(body);
  },
};

export default categoryController;

import { Prisma } from '@prisma/client';
import { cafeteriaMenuService } from '../services';
import { Methods } from './type';

const categoryController: Methods = {
  GET: async () => {
    return await cafeteriaMenuService.GET();
  },
  POST: async (item: Prisma.CategoryCreateInput) => {
    return await cafeteriaMenuService.POST(item);
  },
  PATCH: async (item: Prisma.CategoryUpdateInput) => {
    return await cafeteriaMenuService.PATCH(item);
  },
  DELETE: async (id: string) => {
    return await cafeteriaMenuService.DELETE(id);
  },
};

export default categoryController;

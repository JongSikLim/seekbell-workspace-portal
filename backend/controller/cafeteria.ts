import { Prisma } from '@prisma/client';
import { cafeteriaService } from '../services';
import { Methods } from './type';

const categoryController: Methods = {
  GET: async () => {
    return await cafeteriaService.GET();
  },
  POST: async (item: Prisma.CafeteriaCreateInput) => {
    return await cafeteriaService.POST(item);
  },
  PATCH: async (item: Prisma.CafeteriaUpdateInput) => {
    return await cafeteriaService.PATCH(item);
  },
  DELETE: async (id: string) => {
    return await cafeteriaService.DELETE(id);
  },
  insertCafeteria: async ({
    cafeteria,
    menuList,
  }: {
    cafeteria: Prisma.CategoryCreateInput;
    menuList: Prisma.Cafeteria_menuCreateInput[];
  }) => {
    return await cafeteriaService.insertCafeteria(cafeteria, menuList);
  },
};

export default categoryController;

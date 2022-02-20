import { Prisma } from '@prisma/client';
import { cafeteriaMenuService } from '../services';
import { Methods } from './type';

const categoryController: Methods = {
  GET: async (param: any) => {
    return await cafeteriaMenuService.GET(param);
  },
  POST: async (item: Prisma.Cafeteria_menuCreateInput) => {
    return await cafeteriaMenuService.POST(item);
  },
  PATCH: async (item: Prisma.Cafeteria_menuUpdateInput) => {
    return await cafeteriaMenuService.PATCH(item);
  },
  DELETE: async (id: string) => {
    return await cafeteriaMenuService.DELETE(id);
  },
};

export default categoryController;

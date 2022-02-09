import { Prisma } from '@prisma/client';
import { cafeteriaService } from '../services';
import { Methods } from './type';

const categoryController: Methods = {
  GET: async () => {
    return await cafeteriaService.GET();
  },
  POST: async (item: Prisma.CategoryCreateInput) => {
    return await cafeteriaService.POST(item);
  },
  PATCH: async (item: Prisma.CategoryUpdateInput) => {
    return await cafeteriaService.PATCH(item);
  },
  DELETE: async (id: string) => {
    return await cafeteriaService.DELETE(id);
  },
};

export default categoryController;

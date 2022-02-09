import { Prisma } from '@prisma/client';
import { categoryService } from '../services';
import { Methods } from './type';

const categoryController: Methods = {
  GET: async () => {
    return await categoryService.GET();
  },
  POST: async (item: Prisma.CategoryCreateInput) => {
    return await categoryService.POST(item);
  },
  PATCH: async (item: Prisma.CategoryUpdateInput) => {
    return await categoryService.PATCH(item);
  },
  DELETE: async (id: string) => {
    return await categoryService.DELETE(id);
  },
};

export default categoryController;

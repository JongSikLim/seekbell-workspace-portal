import { Prisma } from '@prisma/client';
import { orderDetailService } from '../services';
import { Methods } from './type';

const categoryController: Methods = {
  GET: async () => {
    return await orderDetailService.GET();
  },
  POST: async (item: Prisma.CategoryCreateInput) => {
    return await orderDetailService.POST(item);
  },
  PATCH: async (item: Prisma.CategoryUpdateInput) => {
    return await orderDetailService.PATCH(item);
  },
  DELETE: async (id: string) => {
    return await orderDetailService.DELETE(id);
  },
};

export default categoryController;

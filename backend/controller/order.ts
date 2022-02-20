import { Prisma } from '@prisma/client';
import { orderService } from '../services';
import { Methods } from './type';

const categoryController: Methods = {
  GET: async () => {
    return await orderService.GET();
  },
  POST: async (item: any) => {
    return await orderService.POST(item);
  },
  PATCH: async (item: Prisma.OrderUpdateInput) => {
    return await orderService.PATCH(item);
  },
  DELETE: async (id: string) => {
    return await orderService.DELETE(id);
  },
  getOrderInfo: async (data: any) => {
    return await orderService.getOrderInfo();
  },
};

export default categoryController;

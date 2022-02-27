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
  DELETE: async (param: any) => {
    return await orderService.DELETE(param);
  },
  getOrderInfo: async (data: any) => {
    return await orderService.getOrderInfo();
  },
  yesterdayOrderInfo: async () => {
    return await orderService.yesterdayOrderInfo();
  },
  todayOrderInfo: async () => {
    return await orderService.todayOrderInfo();
  },
  timeTrigger: async () => {
    return await orderService.timeTrigger();
  },
};

export default categoryController;

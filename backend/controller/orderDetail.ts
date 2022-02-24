import { orderDetailService } from '../services';
import { Methods } from './type';

const categoryController: Methods = {
  GET: async () => {
    return await orderDetailService.GET();
  },
  POST: async (item: any) => {
    return await orderDetailService.POST(item);
  },
  PATCH: async (item: any) => {
    return await orderDetailService.PATCH(item);
  },
  DELETE: async (id: string) => {
    return await orderDetailService.DELETE(id);
  },
};

export default categoryController;

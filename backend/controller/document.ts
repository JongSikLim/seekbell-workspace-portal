import { Prisma } from '@prisma/client';
import { documentService } from '../services';
import { Methods } from './type';

const documentController: Methods = {
  GET: async (param: any) => {
    return await documentService.GET(param);
  },
  list: async () => {
    return await documentService.getList();
  },
  getBySpecificIndex: async (param: any) => {
    return await documentService.getBySpecificIndex(param);
  },
  POST: async (item: Prisma.CategoryCreateInput) => {
    return await documentService.POST(item);
  },
  PATCH: async (item: Prisma.CategoryUpdateInput) => {
    return await documentService.PATCH(item);
  },
  DELETE: async (id: string) => {
    return await documentService.DELETE(id);
  },
};

export default documentController;

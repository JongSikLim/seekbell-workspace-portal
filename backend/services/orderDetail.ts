import { Prisma, PrismaClient } from '@prisma/client';
import { Methods } from 'backend/controller/type';

const prisma = new PrismaClient();

const GET = () => {
  return prisma.order_detail.findMany();
};
const POST = (item: Prisma.Order_detailCreateInput) => {
  return prisma.order_detail.create({
    data: item,
  });
};
const PATCH = (item: Prisma.Order_detailUpdateInput) => {
  const { order_detail_id } = item;
  return prisma.order_detail.update({
    where: { order_detail_id: order_detail_id as string },
    data: item,
  });
};
const DELETE = (order_detail_id: string) => {
  return prisma.order_detail.delete({
    where: { order_detail_id },
  });
};

const category: Methods = {
  GET,
  POST,
  PATCH,
  DELETE,
};

export default category;

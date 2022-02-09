import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const GET = () => {
  return prisma.order.findMany();
};

const POST = (item: Prisma.OrderCreateInput) => {
  return prisma.order.create({
    data: item,
  });
};

const PATCH = (item: Prisma.OrderUpdateInput) => {
  const { order_id } = item;
  return prisma.order.update({
    where: { order_id: order_id as string },
    data: item,
  });
};

const DELETE = (order_id: string) => {
  return prisma.order.delete({
    where: { order_id },
  });
};

type Methods = {
  GET: Function;
  POST: Function;
  PATCH: Function;
  DELETE: Function;
};

const category: Methods = {
  GET,
  POST,
  PATCH,
  DELETE,
};

export default category;

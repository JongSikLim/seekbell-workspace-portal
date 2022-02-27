import { PrismaClient } from '@prisma/client';
import { Methods } from 'backend/controller/type';

const prisma = new PrismaClient();

const GET = () => {
  return prisma.order_detail.findMany();
};

/**
 * 주문 추가
 * @param item
 * @returns
 */
const POST = (item: any) => {
  const { menu_id, order_id, menu_count, user_id } = item;

  try {
    return prisma.order_detail.create({
      data: {
        menu_count,
        menu: {
          connect: { menu_id },
        },
        order: {
          connect: { order_id },
        },
        user: {
          connect: { user_id },
        },
      },
    });
  } catch (error) {
    console.log('error: ', error);
  }
};
const PATCH = (item: any) => {
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

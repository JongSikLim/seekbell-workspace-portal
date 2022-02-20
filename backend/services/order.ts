import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getOrderInfo = async () => {
  const orderList = await prisma.order.findMany({
    select: {
      order_id: true,
      order_state: true,
      order_date: true,
      Cafeteria: {
        select: {
          cafeteria_id: true,
          cafeteria_name: true,
        },
      },
      order_user: {
        select: {
          user_id: true,
          name: true,
        },
      },
      Order_detail: true,
    },
    // include: {
    //   Cafeteria: true,
    //   Order_detail: true,
    //   order_user: true,
    // },
  });

  return orderList;
};

const GET = () => {
  return prisma.order.findMany();
};

const POST = (item: any) => {
  try {
    return prisma.order.create({
      data: {
        Cafeteria: {
          connect: {
            cafeteria_id: item.Cafeteria.cafeteria_id,
          },
        },
        order_user: {
          connect: {
            user_id: item.order_user.user_id,
          },
        },
      },
      include: {
        Cafeteria: true,
        order_user: true,
      },
    });
  } catch (error) {
    console.log('error: ', error);
  }
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

const category = {
  getOrderInfo,
  GET,
  POST,
  PATCH,
  DELETE,
};

export default category;

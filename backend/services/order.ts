import { PrismaClient } from '@prisma/client';
import moment, { Moment } from 'moment';

const prisma = new PrismaClient();

const selectOption = {
  order_id: true,
  order_state: true,
  order_date: true,
  cafeteria: {
    select: {
      cafeteria_id: true,
      cafeteria_name: true,
    },
  },
  user: {
    select: {
      user_id: true,
      name: true,
    },
  },
  orderDetails: {
    select: {
      order_detail_id: true,
      user: {
        select: {
          name: true,
        },
      },
      menu: {
        select: {
          menu_title: true,
          price: true,
        },
      },
    },
  },
};

const timeTrigger = async () => {
  const date = moment().toDate();

  const result = await prisma.order.updateMany({
    data: {
      order_state: 'COMPLETED',
    },
    where: {
      AND: [
        {
          order_state: 'PENDING',
        },
        {
          order_date: {
            lte: date,
          },
        },
      ],
    },
  });

  return result;
};

const getOrderInfo = async () => {
  const orderList = await prisma.order.findMany({
    select: selectOption,
    orderBy: {
      order_state: 'asc',
    },
  });

  return orderList;
};

const yesterdayOrderInfo = async () => {
  const yesterdayStart = moment().subtract(1, 'days').startOf('day').toDate();
  const yesterdayEnd = moment().subtract(1, 'days').endOf('day').toDate();

  const orderList = await prisma.order.findMany({
    select: selectOption,
    where: {
      order_date: {
        gte: yesterdayStart,
        lte: yesterdayEnd,
      },
    },
    orderBy: [
      {
        order_state: 'asc',
      },
      { created_at: 'desc' },
    ],
  });

  return orderList;
};

const todayOrderInfo = async () => {
  const todayStart = moment().startOf('day').toDate();
  const todayEnd = moment().endOf('day').toDate();

  const orderList = await prisma.order.findMany({
    select: selectOption,
    where: {
      order_date: {
        gte: todayStart,
        lte: todayEnd,
      },
    },
    orderBy: [
      {
        order_state: 'asc',
      },
      { created_at: 'desc' },
    ],
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
        order_date: item.order_date,
        cafeteria: {
          connect: {
            cafeteria_id: item.cafeteria_id,
          },
        },
        user: {
          connect: {
            user_id: item.order_user.user_id,
          },
        },
      },
      include: {
        cafeteria: true,
        user: true,
      },
    });
  } catch (error) {
    console.log('error: ', error);
  }
};

const PATCH = (item: any) => {
  const { order_id } = item;
  return prisma.order.update({
    where: { order_id: order_id as string },
    data: item,
  });
};

const DELETE = (param: { order_id: string }) => {
  const { order_id } = param;

  return prisma.order.delete({
    where: {
      order_id,
    },
  });
};

const category = {
  timeTrigger,
  yesterdayOrderInfo,
  todayOrderInfo,
  getOrderInfo,
  GET,
  POST,
  PATCH,
  DELETE,
};

export default category;

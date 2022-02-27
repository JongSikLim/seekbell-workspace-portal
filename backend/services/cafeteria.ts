import { Prisma, PrismaClient } from '@prisma/client';
import { Methods } from 'backend/controller/type';

const prisma = new PrismaClient();

const GET = () => {
  return prisma.cafeteria.findMany();
};
const POST = (item: Prisma.CafeteriaCreateInput) => {
  return prisma.cafeteria.create({
    data: item,
  });
};
const PATCH = (item: Prisma.CafeteriaUpdateInput) => {
  const { cafeteria_id } = item;
  return prisma.cafeteria.update({
    where: { cafeteria_id: cafeteria_id as string },
    data: item,
  });
};
const DELETE = (id: string) => {
  return prisma.cafeteria.delete({
    where: { cafeteria_id: id },
  });
};

/**
 *
 */
const insertCafeteria = (
  cafeteria: Prisma.CafeteriaCreateInput,
  menuList: Prisma.Cafeteria_menuCreateInput[]
) => {
  return prisma.cafeteria.create({
    data: {
      ...cafeteria,
      menus: {
        create: menuList,
      },
    },
  });
};

const category: Methods = {
  GET,
  POST,
  PATCH,
  DELETE,
  insertCafeteria,
};

export default category;

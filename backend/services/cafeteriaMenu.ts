import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const GET = () => {
  return prisma.cafeteria_menu.findMany();
};
const POST = (item: Prisma.Cafeteria_menuCreateInput) => {
  return prisma.cafeteria_menu.create({
    data: item,
  });
};
const PATCH = (item: Prisma.Cafeteria_menuUpdateInput) => {
  const { menu_id } = item;
  return prisma.cafeteria_menu.update({
    where: { menu_id: menu_id as string },
    data: item,
  });
};
const DELETE = (menu_id: string) => {
  return prisma.cafeteria_menu.delete({
    where: { menu_id },
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

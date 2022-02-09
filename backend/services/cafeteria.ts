import { Prisma, PrismaClient } from '@prisma/client';

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

import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const GET = () => {
  return prisma.category.findMany();
};
const POST = (item: Prisma.CategoryCreateInput) => {
  return prisma.category.create({
    data: item,
  });
};
const PATCH = (item: Prisma.CategoryUpdateInput) => {
  const { category_id } = item;
  return prisma.category.update({
    where: { category_id: category_id as string },
    data: item,
  });
};
const DELETE = (id: string) => {
  return prisma.category.delete({
    where: { category_id: id },
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

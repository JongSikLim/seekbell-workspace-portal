import { PrismaClient, Category } from '@prisma/client';

const prisma = new PrismaClient();

const GET = () => {
  return prisma.category.findMany();
};
const POST = (item: any) => {
  console.log('item: ', item);
  return prisma.category.create({
    data: item,
  });
};
const PATCH = () => {};
const DELETE = () => {};
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

import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const GET = ({ id }: { id: string }) => {
  return prisma.document.findUnique({
    where: {
      id,
    },
  });
};

const getList = () => {
  return prisma.document.findMany({});
};

const getBySpecificIndex = ({ index }: { index: string }) => {
  return prisma.document.findFirst({
    where: {
      specific_index: index,
    },
  });
};

const POST = (item: any) => {
  return prisma.document.create({
    data: item,
  });
};
const PATCH = (item: any) => {
  const { id } = item;
  return prisma.document.update({
    where: { id },
    data: item,
  });
};
const DELETE = (id: string) => {
  return prisma.document.delete({
    where: { id },
  });
};

const category = {
  GET,
  getBySpecificIndex,
  getList,
  POST,
  PATCH,
  DELETE,
};

export default category;

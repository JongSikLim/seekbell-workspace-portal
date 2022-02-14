import { Prisma, PrismaClient } from '@prisma/client';
import { Methods } from 'backend/controller/type';
import { createHashedPassword, makeHashedPassword } from 'utils/passwordUtils';

const prisma = new PrismaClient();

const GET = () => {
  return prisma.user.findMany();
};
const POST = (item: Prisma.UserCreateInput) => {
  return prisma.user.create({
    data: item,
  });
};
const PATCH = (item: Prisma.UserUpdateInput) => {
  const { user_id } = item;
  return prisma.user.update({
    where: { user_id: user_id as string },
    data: item,
  });
};
const DELETE = (id: string) => {
  return prisma.user.delete({
    where: { user_id: id },
  });
};

/**
 * 로그인 처리
 */
const login = ({ id, password }: { id: string; password: string }) => {
  const targetUser = prisma.user.findUnique({
    where: {
      email: id,
    },
    select: {
      salt: true,
      password: true,
    },
  });

  return new Promise((resolve, reject) => {
    targetUser.then((res) => {
      if (res) {
        const { salt, password: _password } = res;

        makeHashedPassword(password, salt).then((hashedPassword) => {
          console.log('hashedPassword: ', hashedPassword);
          if (hashedPassword === _password) {
            prisma.user
              .findUnique({
                where: {
                  email: id,
                },
              })
              .then((res) => {
                resolve(res);
              });
          } else {
            reject();
          }
        });
      } else {
        reject();
      }
    });
  });
};

const category = {
  GET,
  POST,
  PATCH,
  DELETE,
  login,
};

export default category;

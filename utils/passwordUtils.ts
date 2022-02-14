import Crypto from 'crypto';

export const createSalt = () => {
  return new Promise((resolve, reject) => {
    Crypto.randomBytes(64, (err, buf) => {
      if (err) reject(err);
      resolve(buf.toString('base64'));
    });
  });
};

export const createHashedPassword = (plainPassword: string) => {
  return new Promise(async (resolve, reject) => {
    const salt: any = await createSalt();
    Crypto.pbkdf2(plainPassword, salt, 9999, 64, 'sha512', (err, key) => {
      if (err) reject(err);
      resolve({ hashedPassword: key.toString('base64'), salt });
    });
  });
};

export const makeHashedPassword = (plainPassword: string, salt: string) =>
  new Promise(async (resolve, reject) => {
    // salt를 가져오는 부분은 각자의 DB에 따라 수정
    Crypto.pbkdf2(plainPassword, salt, 9999, 64, 'sha512', (err, key) => {
      if (err) reject(err);
      resolve(key.toString('base64'));
    });
  });

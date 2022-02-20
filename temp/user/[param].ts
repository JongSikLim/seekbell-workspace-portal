import type { NextApiRequest, NextApiResponse } from 'next';
import { userController } from 'backend/controller';
import { RequestMethods } from 'backend/services/types';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url = '', method, body } = req;
  const withoutBaseRoute = url.replace('/api/user', '');

  const path =
    withoutBaseRoute === ''
      ? (method as RequestMethods)
      : withoutBaseRoute.replace('/', '');

  try {
    const result = await userController[path](JSON.parse(body));
    res.status(200).json(result);
  } catch (error) {
    res.status(500).end(error);
  }
}

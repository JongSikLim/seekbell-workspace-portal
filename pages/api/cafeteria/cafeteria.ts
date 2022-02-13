import type { NextApiRequest, NextApiResponse } from 'next';
import { cafeteriaController } from 'backend/controller';
import { RequestMethods } from 'backend/services/types';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url = '', method, body = {}, query } = req;
  const withoutBaseRoute = url.replace('/api/cafeteria', '');

  const path =
    withoutBaseRoute === ''
      ? (method as RequestMethods)
      : withoutBaseRoute.replace('/', '');

  try {
    const validBody = body === '' ? {} : JSON.parse(body);
    const result = await cafeteriaController[path](validBody);
    res.status(200).json(result);
  } catch (error) {
    console.log('error: ', error);
    res.status(500).end(error);
  }
}

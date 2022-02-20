import type { NextApiRequest, NextApiResponse } from 'next';
import { cafeteriaMenuController } from 'backend/controller';
import { RequestMethods } from 'backend/services/types';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url = '', method, body = {}, query } = req;

  try {
    const validBody = body === '' ? query : JSON.parse(body);
    const result = await cafeteriaMenuController[method as string](validBody);
    res.status(200).json(result);
  } catch (error) {
    console.log('error: ', error);
    res.status(500).end(error);
  }
}

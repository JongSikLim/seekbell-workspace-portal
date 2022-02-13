import type { NextApiRequest, NextApiResponse } from 'next';
import { orderDetailController } from 'backend/controller';
import { RequestMethods } from 'backend/services/types';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  try {
    const result = await orderDetailController[method as RequestMethods]();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).end();
  }
}

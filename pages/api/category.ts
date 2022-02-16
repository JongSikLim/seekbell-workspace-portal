// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { categoryService as methods } from 'backend/services';
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
    const result = await methods[method as RequestMethods]();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).end();
  }
}

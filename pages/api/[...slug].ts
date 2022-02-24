import type { NextApiRequest, NextApiResponse } from 'next';
import * as controllerList from 'backend/controller';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method, body = {}, query } = req;
  const { slug } = query;

  const cList: { [key in string]: any } = {
    ...controllerList,
  };
  try {
    const service = slug[0];
    const router = slug[1] === undefined ? (method as string) : slug[1];
    const targetController = cList[`${service}Controller`];

    let result;

    // url로, (쿼리) 파라미터 받아야하는 놈들
    if (['GET', 'DELETE'].includes(method as string)) {
      result = await targetController[router](query);
    }
    // body로 데이터 받는놈들
    else {
      const data = JSON.parse(body);
      result = await targetController[router](data);
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).end(error);
  }
}

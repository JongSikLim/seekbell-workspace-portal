import { cafeteriaMenuController } from 'backend/controller';
import { RequestMethods } from 'backend/services/types';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url = '', method, body = {}, query } = req;
  const withoutBaseRoute = url.replace('/api/user', '');
  const path =
    withoutBaseRoute === ''
      ? (method as RequestMethods)
      : withoutBaseRoute.replace('/', '');

  try {
    let result;
    // url로, (쿼리) 파라미터 받아야하는 놈들
    if (['GET', 'DELETE'].includes(method as string)) {
      result = await cafeteriaMenuController[path](query);
    }
    // body로 데이터 받는놈들
    else {
      const data = JSON.parse(body);
      result = await cafeteriaMenuController[path](data);
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).end(error);
  }
}

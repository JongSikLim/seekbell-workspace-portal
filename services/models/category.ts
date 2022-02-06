import { Category } from '@prisma/client';

export interface category extends Category {
  category_id?: String;
}

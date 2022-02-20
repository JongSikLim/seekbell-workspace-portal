import { Cafeteria_menu } from '@prisma/client';

type PropsType = {
  menu: Cafeteria_menu;
};
const MenuItem: React.FC<PropsType> = ({ menu }) => {
  const { menu_title, price } = menu;
  return (
    <div>
      <div>{menu_title}</div>
      <div>{price}</div>
    </div>
  );
};

export default MenuItem;

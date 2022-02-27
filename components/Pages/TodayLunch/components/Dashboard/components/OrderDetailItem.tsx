import { Avatar } from 'antd';
import { TextField } from 'components/common';
import Styles from 'styles/Pages/TodayLunch.module.scss';

type OrderDetailItemProps = {
  orderDetail: {
    user: {
      name: string;
    };
    menu: {
      menu_title: string;
      price: number;
    };
    order_detail_id: string;
  };
};

const OrderDetailItem: React.FC<OrderDetailItemProps> = ({ orderDetail }) => {
  const {
    user: { name },
    menu: { menu_title, price },
  } = orderDetail;

  return (
    <div className={Styles.order_detail_item}>
      <div className={Styles.order_detail_item_menu_avatar}>
        <Avatar src="https://joeschmoe.io/api/v1/random" />
        <span>{name}</span>
      </div>

      <div style={{ textAlign: 'right' }}>
        <TextField width={100}>{menu_title}</TextField>
        {/* {menu_title} */}
      </div>
    </div>
  );
};

export default OrderDetailItem;

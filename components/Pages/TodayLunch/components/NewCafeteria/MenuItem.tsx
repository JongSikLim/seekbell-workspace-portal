import { Input, InputNumber } from 'antd';
import { Menu } from '../../type';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

type MenuItemType = React.FC<{
  menu: Menu;
  handleChangeMenu: (
    type: 'price' | 'name'
  ) => (value: string | number) => void;
}>;

const MenuItem: MenuItemType = ({ menu, handleChangeMenu }) => {
  const { name, price } = menu;
  return (
    <>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div
          style={{
            marginBottom: 5,
          }}
        >
          <Input
            defaultValue={name}
            onChange={(e) => handleChangeMenu('name')(e.target.value)}
          />
        </div>
        <div>
          <InputNumber
            defaultValue={price}
            min={0}
            formatter={(val) => `${val}`}
            onChange={(val) => handleChangeMenu('price')(val)}
          />
        </div>
        <div>
          <Button icon={<DeleteOutlined />} />
        </div>
      </div>
    </>
  );
};

export default MenuItem;

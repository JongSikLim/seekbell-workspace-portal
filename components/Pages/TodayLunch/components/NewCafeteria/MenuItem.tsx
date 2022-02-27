import { Input, InputNumber } from 'antd';
import { Menu } from '../../type';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

type MenuItemType = React.FC<{
  menu: Menu;
  handleChangeMenu: (
    type: 'price' | 'name'
  ) => (value: string | number) => void;
  handleDeleteMenu: () => void;
}>;

const MenuItem: MenuItemType = ({
  menu,
  handleChangeMenu,
  handleDeleteMenu,
}) => {
  const { name, price } = menu;
  const handleDelete = () => handleDeleteMenu();

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        marginBottom: 5,
      }}
    >
      <div style={{ flexBasis: '70%' }}>
        <Input
          placeholder="메뉴이름"
          defaultValue={name}
          onChange={(e) => handleChangeMenu('name')(e.target.value)}
        />
      </div>
      <div style={{ flexBasis: '25%' }}>
        <InputNumber
          style={{ width: '100%' }}
          defaultValue={price}
          min={0}
          controls={false}
          formatter={(val) => `${val}`}
          onChange={(val) => handleChangeMenu('price')(val)}
        />
      </div>
      <div style={{ flexBasis: '5%' }}>
        <Button icon={<DeleteOutlined />} onClick={handleDelete} />
      </div>
    </div>
  );
};

export default MenuItem;

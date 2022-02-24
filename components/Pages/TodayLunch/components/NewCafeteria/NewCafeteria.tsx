import { Button, Input, message } from 'antd';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { Page, stepState } from 'recoils/atoms/todaylunch';
import commonAxios from 'utils/apiHelper';
import { v1 } from 'uuid';
import { Menu } from '../../type';
import MenuList from './MenuList';

const NewCafeteria = () => {
  const setStep = useSetRecoilState(stepState);
  const [menuList, setMenuList] = useState<Menu[]>([]);
  const [cafeName, setCafeName] = useState<string>('');

  /**
   * 메뉴추가 버튼 처리
   */
  const handleInsertMenu = () => {
    const newMenu: Menu = {
      id: v1(),
      name: '',
      price: 0,
    };
    setMenuList((prev) => prev.concat(newMenu));
  };

  /**
   * 가게등록 버튼 처리
   */
  const handleInsertCafeteria = () => {
    // validation
    if (checkValidation() === false)
      message.error('데이터 양식을 확인해주세요.');
    // cafeteria insert API 호출
    const cafeteriaForApi = {
      cafeteria_name: cafeName,
    };
    const menuListForApi = menuList.map((menu) => ({
      menu_title: menu.name,
      price: menu.price,
    }));

    const body = {
      cafeteria: cafeteriaForApi,
      menuList: menuListForApi,
    };

    commonAxios
      .post('/cafeteria/insertCafeteria', body)
      .then((res) => {
        message.success('가게 등록 완료');
        setStep(Page.DASHBOARD);
      })
      .catch((err) => {
        message.error(err);
      });
  };

  /**
   * 데이터 타당성 검사
   * @returns
   */
  const checkValidation = () => {
    let validResult = true;

    if (cafeName === '' || menuList.length === 0) {
      validResult = false;
    }

    if (
      menuList.some((menu) => {
        menu.name === '' || menu.price === 0;
      })
    ) {
      validResult = false;
    }

    return validResult;
  };

  return (
    <div style={{ width: '50%', minWidth: '300px' }}>
      <div style={{ display: 'flex', marginBottom: 20 }}>
        <Input
          type={'text'}
          value={cafeName}
          onChange={(e) => setCafeName(e.target.value)}
        />
        <Button type="primary" onClick={handleInsertCafeteria}>
          가게등록
        </Button>
      </div>
      <hr />
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <h3>메뉴항목</h3>
          </div>
          <Button onClick={handleInsertMenu}>메뉴추가</Button>
        </div>
        <hr />
        <MenuList {...{ menuList }} handleChangeMenuList={setMenuList} />
      </div>
    </div>
  );
};

export default NewCafeteria;

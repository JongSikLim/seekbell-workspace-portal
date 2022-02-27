import { Button, Input, message } from 'antd';
import { CButton } from 'components/common';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { Page, stepState } from 'recoils/atoms/todaylunch';
import commonAxios from 'utils/apiHelper';
import { v1 } from 'uuid';
import { Menu } from '../../type';
import { Header, SubHeader } from '../common';
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
    if (checkValidation() === false) {
      message.error('데이터 양식을 확인해주세요.');
      return;
    }
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
        return [null, ''].includes(menu.name) || [null, 0].includes(menu.price);
      })
    ) {
      validResult = false;
    }

    return validResult;
  };

  const handleDeleteMenu = (id: string) => () => {
    setMenuList((prev) =>
      prev.filter((menu) => {
        if (menu.id === id) {
          return false;
        } else return true;
      })
    );
  };

  return (
    <div style={{ height: '100%' }}>
      <Header
        title={'가게등록'}
        buttons={[
          {
            text: '취소하기',
            type: 'danger',
            onClick: () => setStep(Page.DASHBOARD),
          },
        ]}
      />
      <div style={{ width: '50%', minWidth: '300px' }}>
        <div style={{ display: 'flex', marginBottom: 20 }}>
          <Input
            type={'text'}
            placeholder="가게명을 등록해주세요"
            value={cafeName}
            onChange={(e) => setCafeName(e.target.value)}
          />
        </div>
        <div>
          <div style={{ width: '50%' }}>
            <SubHeader
              subTitle="메뉴항목"
              buttons={[
                {
                  text: '가게등록',
                  // type: 'primary',
                  onClick: () => handleInsertCafeteria(),
                },
              ]}
            />
            <hr />
            <MenuList
              {...{ menuList }}
              handleChangeMenuList={setMenuList}
              handleDeleteMenu={handleDeleteMenu}
            />
            <CButton type="primary" block={true} handleClick={handleInsertMenu}>
              메뉴추가
            </CButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCafeteria;

import { Cafeteria_menu, User } from '@prisma/client';
import { Empty, Skeleton } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import CButton from 'components/common/CButton';
import { useMemo, useState, useEffect } from 'react';
import {
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from 'recoil';
import { Page, selectOrderIdState, stepState } from 'recoils/atoms/todaylunch';
import { cafeteriaMenuState } from 'recoils/selectors/todaylunch';
import Styles from 'styles/Pages/TodayLunch.module.scss';
import { ChoiceMenuItem } from './components';
import MenuInfo from './components/MenuInfo';
import commonAxios from 'utils/apiHelper';
import { userInfoState } from 'recoils/atoms/user';

const ChoiceMenu = () => {
  const { state, contents } = useRecoilValueLoadable(cafeteriaMenuState);
  const [selectedMenu, setSelectedMenu] = useState<Cafeteria_menu>();
  const [selectOrderId, setSelectOrderId] = useRecoilState(selectOrderIdState);
  const userInfo = useRecoilValue(userInfoState) as User;
  const setStep = useSetRecoilState(stepState);

  const { user_id } = userInfo;

  // 메뉴추가 기능
  const handleSelectMenu = (menu_id: string) => {
    const body = {
      menu_id,
      order_id: selectOrderId,
      menu_count: 1,
      user_id: user_id,
    };

    commonAxios.post('/orderDetail', body);
  };

  const optionElements = useMemo(() => {
    let _data;

    switch (state) {
      case 'loading':
        _data = <Skeleton />;
        break;
      case 'hasValue':
        if (contents.length > 0) {
          _data = contents.map((menu: Cafeteria_menu) => {
            const handleClick = () => setSelectedMenu(menu);
            return (
              <ChoiceMenuItem
                key={menu.menu_id}
                menu={menu}
                handleClick={handleClick}
              />
            );
          });
        } else {
          _data = <Empty />;
        }
        break;
      case 'hasError':
        _data = <Empty />;
        break;
    }

    return _data;
  }, [state]);

  useEffect(() => {
    return () => {
      setSelectOrderId(undefined);
    };
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <div className={Styles.common_header}>
        <h1>메뉴 고르기</h1>
        <ButtonGroup>
          <CButton handleClick={() => setStep(Page.DASHBOARD)}>
            취소하기
          </CButton>
        </ButtonGroup>
      </div>
      <div className={Styles.choice_menu_content}>
        <div className={Styles.choice_menu}>{optionElements}</div>
        <div className={Styles.menu_info}>
          {selectedMenu && (
            <MenuInfo menu={selectedMenu} handleSelectMenu={handleSelectMenu} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChoiceMenu;

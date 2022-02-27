import { Cafeteria_menu, User } from '@prisma/client';
import { Empty, message, Skeleton } from 'antd';
import CButton from 'components/common/CButton';
import { useEffect, useMemo, useState } from 'react';
import {
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from 'recoil';
import {
  menuRefreshTokenState,
  Page,
  selectOrderIdState,
  stepState,
} from 'recoils/atoms/todaylunch';
import { userInfoState } from 'recoils/atoms/user';
import { cafeteriaMenuState } from 'recoils/selectors/todaylunch';
import Styles from 'styles/Pages/TodayLunch.module.scss';
import commonAxios from 'utils/apiHelper';
import { v1 } from 'uuid';
import { Header } from '../common';
import { ChoiceMenuItem } from './components';
import MenuInfo from './components/MenuInfo';
import NewMenu from './components/NewMenu';

const ChoiceMenu = () => {
  const [newMenuState, setNewMenuState] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<Cafeteria_menu>();
  const [selectOrderId, setSelectOrderId] = useRecoilState(selectOrderIdState);
  const userInfo = useRecoilValue(userInfoState) as User;
  const setStep = useSetRecoilState(stepState);
  const { state, contents } = useRecoilValueLoadable(cafeteriaMenuState);
  const setMenuRefreshToken = useSetRecoilState(menuRefreshTokenState);

  const { user_id } = userInfo;

  // 메뉴선택 기능
  const handleSelectMenu = (menu_id: string) => {
    const body = {
      menu_id,
      order_id: selectOrderId,
      menu_count: 1,
      user_id: user_id,
    };

    commonAxios.post('/orderDetail', body).then((res) => {
      message.success('주문 완료하였습니다.');
      setStep(Page.DASHBOARD);
    });
  };

  // 메뉴삭제 기능
  const deleteMenu = (menu_id: string) => {
    commonAxios
      .delete('cafeteriaMenu', {
        menu_id,
      })
      .then((res) => {
        setSelectedMenu(undefined);
        setMenuRefreshToken(v1());
        message.success('메뉴 삭제 성공');
      })
      .catch((err) => {
        message.error('메뉴 삭제 실패');
      });
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
            const handleClick = () => {
              setSelectedMenu(menu);
              setNewMenuState(false);
            };

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
  }, [state, contents]);

  useEffect(() => {
    return () => {
      setSelectOrderId(undefined);
    };
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <Header
        title="메뉴 고르기"
        buttons={[
          {
            text: '취소하기',
            onClick: () => setStep(Page.DASHBOARD),
          },
        ]}
      />
      <div
        className={Styles.choice_menu_content}
        style={{ justifyContent: 'flex-start' }}
      >
        <div style={{ width: '40%' }}>
          <div className={Styles.choice_menu}>{optionElements}</div>
          <CButton
            block={true}
            type={'primary'}
            handleClick={() => {
              setNewMenuState(true);
            }}
          >
            메뉴 추가하기
          </CButton>
        </div>
        <div style={{ width: '10%' }}></div>
        {newMenuState ? (
          <>
            <NewMenu setNewMenuState={setNewMenuState} />
          </>
        ) : (
          <div className={Styles.menu_info}>
            {selectedMenu && (
              <MenuInfo
                menu={selectedMenu}
                deleteMenu={deleteMenu}
                handleSelectMenu={handleSelectMenu}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChoiceMenu;

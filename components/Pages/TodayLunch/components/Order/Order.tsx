import { Cafeteria, Prisma } from '@prisma/client';
import { Button, Select } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import { useEffect, useLayoutEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  cafeteriaListState,
  Page,
  selectCafeteriaIdState,
  stepState,
} from 'recoils/atoms/todaylunch';
import { userInfoState } from 'recoils/atoms/user';
import commonAxios from 'utils/apiHelper';
import { MenuList } from './components';

const getCafeteriaList = () => {
  return commonAxios.get('/cafeteria');
};

const Order = () => {
  const setStep = useSetRecoilState(stepState);
  const userInfo = useRecoilValue(userInfoState);
  const [selectCafeteriaId, setSelectCafeteriaId] = useRecoilState(
    selectCafeteriaIdState
  );
  const [cafeteriaList, setCafeteriaList] = useRecoilState(cafeteriaListState);

  /**
   * 가게 선택 처리
   * @param value
   */
  const handleSelectCafeteria = (value: string) => {
    setSelectCafeteriaId(value);
  };

  const init = () => {
    getCafeteriaList().then((res) => {
      setCafeteriaList(res);
    });
  };

  /**
   * 주문시작 버튼 클릭
   */
  const handleCreateOrder = () => {
    const newOrder = {
      cafeteria_id: selectCafeteriaId,
      order_user: userInfo,
    };
    commonAxios.post('order', newOrder);
    setStep(Page.DASHBOARD);
  };

  //#region hooks
  useLayoutEffect(() => {
    init();
  }, []);
  //#endregion

  //#region render
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h1>주문하기</h1>
        <ButtonGroup>
          <Button type="primary" onClick={handleCreateOrder}>
            주문시작
          </Button>
          <Button onClick={() => setStep(Page.DASHBOARD)}>취소하기</Button>
        </ButtonGroup>
      </div>
      <div>
        <Select
          style={{
            width: 300,
          }}
          size="large"
          showSearch
          placeholder="가게 고르세요"
          fieldNames={{ label: 'cafeteria_name', value: 'cafeteria_id' }}
          optionFilterProp="cafeteria_name"
          optionLabelProp="cafeteria_name"
          // value={cafeteriaList}
          options={cafeteriaList}
          onChange={handleSelectCafeteria}
          filterOption={(input, option) =>
            //@ts-ignore
            option['cafeteria_name']
              .toLowerCase()
              .indexOf(input.toLowerCase()) >= 0
          }
          dropdownRender={(menu) => (
            <>
              <div>{menu} </div>
              <hr />
              <div style={{ paddingLeft: '10', paddingRight: '10' }}>
                <Button
                  block
                  type="primary"
                  onClick={() => setStep(Page.NEW_CAFETERIA)}
                >
                  가게 추가
                </Button>
              </div>
            </>
          )}
        ></Select>
      </div>
      <hr />
      <div>
        <h2>메뉴리스트</h2>
        <MenuList />
      </div>
    </>
  );
  //#endregion
};

export default Order;

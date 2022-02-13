import { Cafeteria } from '@prisma/client';
import { Button, Select } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  cafeteriaListState,
  Page,
  selectCafeteriaState,
  stepState,
} from 'recoils/atoms/todaylunch';
import { MenuList } from './components';
const { Option } = Select;
const Order = () => {
  const cafeteriaList = useRecoilValue(cafeteriaListState);
  const setStep = useSetRecoilState(stepState);
  const setSelectCafeteria = useSetRecoilState(selectCafeteriaState);

  /**
   * 가게 선택 처리
   * @param value
   */
  const handleSelectCafeteria = (_: any, option: Cafeteria) => {
    setSelectCafeteria(option);
  };

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
          <Button type="primary" onClick={() => setStep(Page.HISTORY)}>
            주문시작
          </Button>
          <Button onClick={() => setStep(Page.HISTORY)}>취소하기</Button>
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
};

export default Order;

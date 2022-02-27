import { Button, Select, TimePicker } from 'antd';
import moment, { Moment } from 'moment';
import { useLayoutEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  cafeteriaListState,
  Page,
  selectCafeteriaIdState,
  stepState,
} from 'recoils/atoms/todaylunch';
import { userInfoState } from 'recoils/atoms/user';
import commonAxios from 'utils/apiHelper';
import { Header } from '../common';
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
  let selectTimeRef = useRef<Date | null>(null);
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
      order_date: selectTimeRef.current,
    };
    commonAxios.post('order', newOrder);
    setStep(Page.DASHBOARD);
  };

  const handleTimeChange = (time: Moment | null, timeString: string) => {
    selectTimeRef.current = (time as Moment).toDate();
  };

  //#region hooks
  useLayoutEffect(() => {
    init();
  }, []);
  //#endregion

  //#region render
  return (
    <div style={{ height: '100%' }}>
      <Header
        title={'파티열기'}
        buttons={[
          { text: '주문시작', onClick: handleCreateOrder },
          {
            text: '취소하기',
            type: 'danger',
            onClick: () => setStep(Page.DASHBOARD),
          },
        ]}
      />
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
          option['cafeteria_name'].toLowerCase().indexOf(input.toLowerCase()) >=
          0
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
      />
      <TimePicker
        placeholder="주문만료시간"
        use12Hours
        format={'h:mm a'}
        size="large"
        minuteStep={5}
        defaultValue={moment()}
        onChange={handleTimeChange}
      />

      <hr />
      <div>
        <h2>메뉴리스트</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <MenuList />
        </div>
      </div>
    </div>
  );
  //#endregion
};

export default Order;

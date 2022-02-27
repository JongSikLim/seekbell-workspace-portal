import { ExclamationCircleOutlined } from '@ant-design/icons';
import { OrderState, User } from '@prisma/client';
import { List, message, Tag } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import ButtonGroup from 'antd/lib/button/button-group';
import confirm from 'antd/lib/modal/confirm';
import { CButton, NumberFormatText } from 'components/common';
import { useMemo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Page, stepState } from 'recoils/atoms/todaylunch';
import { userInfoState } from 'recoils/atoms/user';
import { selectedOrderInfoState } from 'recoils/selectors/todaylunch';
import Styles from 'styles/Pages/TodayLunch.module.scss';
import commonAxios from 'utils/apiHelper';
import { Header, SubHeader } from '../common';

const OrderInfo = () => {
  const userInfo = useRecoilValue(userInfoState);
  const selectedOrderInfo = useRecoilValue(selectedOrderInfoState);
  const setStep = useSetRecoilState(stepState);
  const {
    order_id,
    order_state,
    orderDetails,
    user: { user_id: orderMasterId },
  } = selectedOrderInfo;

  // 현재 로그인 한 유저가 총무인지 여부
  const isOrderMaster = (userInfo as User).user_id === orderMasterId;

  // 종료여부
  const isClosed: boolean = order_state === 'COMPLETED';

  /**
   * 주문 총액
   */
  const totalPrice = useMemo(() => {
    return orderDetails.reduce((_totalPrice: number, curr: any) => {
      return _totalPrice + curr.menu.price;
    }, 0);
  }, [orderDetails]);

  /**
   * 주문삭제처리
   */
  const handleDeleteOrder = () => {
    commonAxios
      .delete('order', { order_id })
      .then(() => {
        message.info('삭제 완료');
        setStep(Page.DASHBOARD);
      })
      .catch((err) => {
        message.error(`삭제 실패 ${JSON.stringify(err)}`);
      });
  };

  /**
   * 주문완료처리
   */
  const handleCompleteOrder = () => {
    const orderState: OrderState = 'COMPLETED';

    commonAxios
      .patch('order', {
        order_id,
        order_state: orderState,
      })
      .then((res) => {
        message.success('주문종료 처리완료');
        setStep(Page.DASHBOARD);
      })
      .catch((err) => {
        message.error(`완료처리 실패 ${JSON.stringify(err)} `);
      });
  };

  return (
    <div style={{ height: '100%' }}>
      <Header
        title={'주문관리'}
        buttons={[
          { text: '취소하기', onClick: (e) => setStep(Page.DASHBOARD) },
        ]}
      />
      <div style={{ width: '50%' }}>
        <SubHeader
          subTitle={'주문현황'}
          buttons={[
            {
              text: '주문하기',
              type: 'primary',
              onClick: (e) => setStep(Page.CHOICE_MENU),
            },
          ]}
          {...(isClosed
            ? {
                extra: (
                  <div>
                    <Tag color={'#364659'}>주문완료</Tag>
                  </div>
                ),
              }
            : {})}
        />
        <List
          id={Styles.orderInfoList}
          itemLayout="horizontal"
          dataSource={orderDetails}
          renderItem={(orderDetail: any) => (
            <List.Item>
              <List.Item.Meta
                key={orderDetail.order_detail_id}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{orderDetail.user.name}</a>}
                description={<>{orderDetail.menu.menu_title}</>}
              />
              <div>
                <NumberFormatText value={orderDetail.menu.price} />원
              </div>
            </List.Item>
          )}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 'bolder',
            fontSize: '24px',
          }}
        >
          <span>주문 총계</span>
          <span>
            <NumberFormatText value={totalPrice} />원
          </span>
        </div>

        {isOrderMaster && (
          <div style={{ marginTop: 30, textAlign: 'right' }}>
            <ButtonGroup>
              <CButton
                type="danger"
                handleClick={() => {
                  confirm({
                    title: '정말로 주문을 삭제하실건가요?',
                    icon: <ExclamationCircleOutlined />,
                    content: '삭제하시면 주문내역이 모두 사라집니다.',
                    okText: '삭제',
                    okType: 'danger',
                    cancelText: '취소',
                    onOk() {
                      handleDeleteOrder();
                    },
                    onCancel() {},
                  });
                }}
              >
                주문삭제
              </CButton>
              <CButton type="primary" handleClick={handleCompleteOrder}>
                주문완료 처리
              </CButton>
            </ButtonGroup>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderInfo;

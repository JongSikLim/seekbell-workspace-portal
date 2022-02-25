import { ExclamationCircleOutlined } from '@ant-design/icons';
import { List, Popconfirm } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import ButtonGroup from 'antd/lib/button/button-group';
import confirm from 'antd/lib/modal/confirm';
import { CButton, NumberFormatText } from 'components/common';
import { useMemo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Page, stepState } from 'recoils/atoms/todaylunch';
import { selectedOrderInfoState } from 'recoils/selectors/todaylunch';
import Styles from 'styles/Pages/TodayLunch.module.scss';
const OrderInfo = () => {
  const selectedOrderInfo = useRecoilValue(selectedOrderInfoState);
  const setStep = useSetRecoilState(stepState);
  const { Order_detail } = selectedOrderInfo;

  /**
   * 주문 총액
   */
  const totalPrice = useMemo(() => {
    return Order_detail.reduce((_totalPrice: number, curr: any) => {
      return _totalPrice + curr.menu_id.price;
    }, 0);
  }, [Order_detail]);

  /**
   *
   */
  const handleClickFinishOrder = () => { };

  return (
    <div style={{ height: '100%' }}>
      <div className={Styles.common_header}>
        <h1>주문 관리 </h1>
        <ButtonGroup>
          <CButton handleClick={() => setStep(Page.DASHBOARD)}>
            취소하기
          </CButton>
        </ButtonGroup>
      </div>
      <div style={{ width: '50%' }}>
        <h2>주문현황</h2>
        <List
          id={Styles.orderInfoList}
          itemLayout="horizontal"
          dataSource={Order_detail}
          renderItem={(orderDetail: any) => (
            <List.Item>
              <List.Item.Meta
                key={orderDetail.order_detail_id}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{orderDetail.User.name}</a>}
                description={<>{orderDetail.menu_id.menu_title}</>}
              />
              <div>
                <NumberFormatText value={orderDetail.menu_id.price} />원
              </div>
            </List.Item>
          )}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>주문 총계</span>
          <span>
            <NumberFormatText value={totalPrice} />원
          </span>
        </div>

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
                    console.log('OK');
                  },
                  onCancel() {
                    console.log('Cancel');
                  },
                });
              }}
            >
              주문삭제
            </CButton>
            <CButton type="primary" handleClick={handleClickFinishOrder}>
              주문완료 처리
            </CButton>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;

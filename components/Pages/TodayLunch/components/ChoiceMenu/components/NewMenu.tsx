import { UploadOutlined } from '@ant-design/icons';
import { Prisma } from '@prisma/client';
import { Button, Form, Input, InputNumber, message, Upload } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { menuRefreshTokenState } from 'recoils/atoms/todaylunch';
import { selectedOrderInfoState } from 'recoils/selectors/todaylunch';
import commonAxios from 'utils/apiHelper';
import { v1 } from 'uuid';
import { SubHeader } from '../../common';

type NewMenuProps = {
  setNewMenuState: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewMenu: React.FC<NewMenuProps> = ({ setNewMenuState }) => {
  const selectedOrderInfo = useRecoilValue(selectedOrderInfoState);
  const setMenuRefreshToken = useSetRecoilState(menuRefreshTokenState);
  const [form] = useForm();

  /**
   * 메뉴 추가 처리
   * @param data
   */
  const handleFinish = (data: any) => {
    const { title, price } = data;
    const {
      cafeteria: { cafeteria_id },
    } = selectedOrderInfo;

    const newMenu: Prisma.Cafeteria_menuCreateInput = {
      menu_title: title,
      price,
      cafeteria: {
        connect: { cafeteria_id },
      },
    };
    commonAxios
      .post('cafeteriaMenu', newMenu)
      .then(() => {
        message.success('메뉴추가성공');
        setMenuRefreshToken(v1());
        setNewMenuState(false);
      })
      .catch(() => {
        message.error('메뉴추가실패..');
      });
  };

  return (
    <div style={{ width: '40%', height: '100%', textAlign: 'left' }}>
      <SubHeader subTitle="메뉴추가" buttons={[]} />

      <div className="form">
        <Form
          form={form}
          onFinish={handleFinish}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 12 }}
          labelAlign={'left'}
        >
          <Form.Item
            name={'title'}
            label={'메뉴이름'}
            rules={[{ required: true, message: '이름을 입력하세요.' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={'price'}
            label={'가격'}
            rules={[{ required: true, message: '가격을 입력하세요.' }]}
          >
            <InputNumber controls={false} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name={'picture'}
            label={'메뉴사진'}
            valuePropName="fileList"
          >
            <Upload
              name="hi"
              action={(file) => {
                return new Promise((resolve) => resolve('1'));
              }}
              listType={'picture'}
            >
              <Button icon={<UploadOutlined />}>업로드</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              메뉴추가
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default NewMenu;

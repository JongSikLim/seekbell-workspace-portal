import { Prisma, User } from '@prisma/client';
import { Form, Input, Button } from 'antd';
import React from 'react';
import commonAxios from 'utils/apiHelper';
import { createHashedPassword } from 'utils/passwordUtils';
import { Page } from '../Login';

type SignUpType = React.FC<{
  setPage: React.Dispatch<React.SetStateAction<Page>>;
}>;

const Signup: SignUpType = ({ setPage }) => {
  const [form] = Form.useForm();

  const handleFinish = (value: any) => {
    const { id, password, name } = value;

    //@ts-ignore
    createHashedPassword(password).then(({ hashedPassword, salt }) => {
      const newUser: Prisma.UserCreateInput = {
        name,
        salt,
        password: hashedPassword,
        email: id,
      };

      commonAxios
        .post(`/user`, newUser)
        .then(() => {
          setPage(Page.SIGN_IN);
        })
        .catch((err) => {          
        });
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%',
        textAlign: 'center',
      }}
    >
      <h1 style={{ marginBottom: 40 }}>회원가입</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 700,
          }}
        >
          <Form
            form={form}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 12 }}
            onFinish={handleFinish}
          >
            <Form.Item
              name="id"
              label="아이디"
              rules={[{ required: true, message: '아이디를 입력하세요.' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="비밀번호"
              rules={[{ required: true, message: '비밀번호 입력하세요.' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="passwordConfirm"
              label="비밀번호 확인"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: '비밀번호를 입력하세요.',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        'The two passwords that you entered do not match!'
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="name"
              label="이름"
              tooltip="최대한 실명을 적어주세요!"
              rules={[
                {
                  required: true,
                  message: '이름을 입력해주세요.',
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                가입하기
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

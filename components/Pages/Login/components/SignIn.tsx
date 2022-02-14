import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import commonAxios from 'utils/apiHelper';

enum Page {
  SIGN_IN,
  SIGN_UP,
}

type SignInType = React.FC<{
  setPage: React.Dispatch<React.SetStateAction<Page>>;
}>;

const SignIn: SignInType = ({ setPage }) => {
  const onFinish = (values: any) => {
    const { id, password } = values;

    commonAxios
      .post(`user/login`, {
        id,
        password,
      })
      .then((res) => {
        console.log('res: ', res);
      })
      .catch((err) => {
        message.error('계정정보가 틀렸습니다.');
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="id"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>비밀번호 기억</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            비밀번호 찾기
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          <Button onClick={() => setPage(Page.SIGN_UP)}>회원가입</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;

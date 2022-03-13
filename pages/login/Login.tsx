import { Login as Component } from 'components/Pages';
import { HeadWrapper } from 'components/common';

const Login = () => {
  return (
    <>
      <HeadWrapper
        metaTemplate={{
          html: {
            title: '로그인',
            description: 'seekbell playground login',
          },
        }}
      />
      <Component />
    </>
  );
};

export default Login;

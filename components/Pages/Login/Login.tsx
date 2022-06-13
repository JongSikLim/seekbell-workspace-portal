import { useRouter } from 'next/router';
import { useState } from 'react';
import { SignIn, SignUp } from './components';

export enum Page {
  SIGN_IN,
  SIGN_UP,
}

const Login = () => {
  const [page, setPage] = useState<Page>(Page.SIGN_IN);

  return (
    <div style={{ height: '100%' }} data-testid="login">
      {page === Page.SIGN_IN && <SignIn {...{ setPage }} />}
      {page === Page.SIGN_UP && <SignUp {...{ setPage }} />}
    </div>
  );
};

export default Login;

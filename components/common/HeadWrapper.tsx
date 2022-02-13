import HeadComponent from 'next/head';
import { useRouter } from 'next/router';

const HeadWrapper = () => {
  const router = useRouter();
  console.log('router: ', router);

  return (
    <HeadComponent>
      <title>{router.pathname}</title>
    </HeadComponent>
  );
};

export default HeadWrapper;

import HeadComponent from 'next/head';
import { useRouter } from 'next/router';

type HeadWrapperProps = {
  keywords?: string[];
};

const HeadWrapper = () => {
  const router = useRouter();

  return (
    <HeadComponent>
      <title>{router.pathname}</title>
      <meta></meta>
    </HeadComponent>
  );
};

export default HeadWrapper;

import dynamic from 'next/dynamic';
// import { Main as MainPage } from 'components/Pages';

const MainPage = dynamic(() => import('components/Pages/Main'), { ssr: false });

const Main = () => {
  return <MainPage />;
};

export default Main;

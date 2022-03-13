import type { NextPage } from 'next';
import Head from 'next/head';
import '@toast-ui/editor/dist/toastui-editor.css';

/**
 * index.tsx 에서 서버관련된 커스텀 설정을 한다.
 * @returns
 */
const Home: NextPage = () => {
  //#region render
  return (
    <div>
      <Head>
        <title>seekbell playground</title>
        <meta
          name="description"
          content="안녕하세요 Nextjs 스터디를 위한 playgroud 프로젝트입니다."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
  //#endregion
};

export default Home;

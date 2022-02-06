import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

/**
 * 페이지가 라우팅 될 때 해당 컴포넌트를 거친다.
 * Component에 라우팅 경로에 해당하는 컴포넌트 파일을 가져온다.
 *
 * 공통 css 파일 추가도 본 파일에서 하는게 좋다.
 * 프론트에서 관리해야하는 걸 여기서 사용하는게 좋다.
 */
const theme = extendTheme({
  colors: {
    brand: {
      daryNavy: '#242d40',
      navy: '#364659',
      beige: '#f2e9d8',
      salmon: '#f2bb77',
      brown: '#733d0e',
      white: '#fff',
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;

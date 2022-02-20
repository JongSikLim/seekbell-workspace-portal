import React, { useMemo } from 'react';
import { LayoutComponent } from '../../types';
import Styles from 'styles/common/layout.module.scss';
import { useRouter } from 'next/router';

const Contents: LayoutComponent = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

  const title = useMemo(() => {
    let _title;

    switch (pathname) {
      case '/todaylunch':
        _title = '오늘의 점심은';
        break;
      default:
        _title = '헤더 기본값';
        break;
    }

    return _title;
  }, [pathname]);

  return (
    <div className={Styles['content-container']}>
      <div className={Styles.header}>{title}</div>
      <div className={Styles.content}>{children}</div>
    </div>
  );
};

export default Contents;

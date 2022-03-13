import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import Styles from 'styles/common/layout.module.scss';
import { LayoutComponent } from '../../types';

const Contents: LayoutComponent = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;
  const [title, setTitle] = useState('타이틀');

  useEffect(() => {
    setTimeout(() => {
      const _title = document.title;
      setTitle(_title);
    }, 1);
  }, [pathname]);

  return (
    <div className={Styles['content-container']}>
      <div className={Styles.header}>{title}</div>
      <div className={Styles.content}>{children}</div>
    </div>
  );
};

export default Contents;

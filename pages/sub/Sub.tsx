import Link from 'next/link';
import React from 'react';
import { useRecoilState } from 'recoil';
import { tempVisibleState } from 'recoils/atoms/main';

const Sub = () => {
  const [tempVisible, setTempVisible] = useRecoilState(tempVisibleState);
  return (
    <div>
      서브
      <div>{tempVisible ? 'true' : 'false'}</div>
      <button onClick={() => setTempVisible((prev) => !prev)}>버튼</button>
      <Link href="/main">메인으로</Link>
    </div>
  );
};

export default Sub;

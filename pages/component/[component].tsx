import { useRouter } from 'next/router';
import React from 'react';
import * as components from 'components/Pages/Component';
import { HeadWrapper } from 'components/common';

const UiComponent = () => {
  const router = useRouter();
  const {
    query: { component },
  } = router;

  //@ts-ignore
  const TargetComponent = components[component as string];

  return (
    <>
      <HeadWrapper
        metaTemplate={{
          html: {
            title: 'UI 컴포넌트',
            description: 'Seekbell playground component page',
          },
        }}
      />
      <>{TargetComponent && <TargetComponent />}</>
    </>
  );
};

export default UiComponent;

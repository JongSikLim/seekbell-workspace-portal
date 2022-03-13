import { HeadWrapper } from 'components/common';
import dynamic from 'next/dynamic';
import React from 'react';

const Component = dynamic(() => import('components/Pages/Intro'), {
  ssr: false,
});

const Profile = () => {
  return (
    <>
      <HeadWrapper
        metaTemplate={{
          html: {
            title: 'Seekbell Playground',
            description: 'Seekbell playground project for nextjs study.',
            imageUrl: 'https://avatars.githubusercontent.com/u/19147143?v=4',
          },
        }}
      />
      <Component />
    </>
  );
};

export default Profile;

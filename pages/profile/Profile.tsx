import { HeadWrapper } from 'components/common';
import { Profile as Component } from 'components/Pages';
import React from 'react';

const Profile = () => {
  return (
    <>  
      {/* 콘솔용 */}
      <HeadWrapper />
      <Component />
    </>
  );
};

export default Profile;

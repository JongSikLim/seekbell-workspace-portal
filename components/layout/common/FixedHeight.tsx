import React from 'react';

type FixedHeightType = React.FC<{
  children: JSX.Element | JSX.Element[];
}>;

const FixedHeight: FixedHeightType = ({ children }) => {
  return (
    <div
      style={{
        height: '100vh',
        overflowY: 'hidden',
      }}
    >
      {children}
    </div>
  );
};

export default FixedHeight;

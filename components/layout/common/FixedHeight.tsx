import React from 'react';

type FixedHeightType = React.FC<{
  children: JSX.Element | JSX.Element[];
}>;

const FixedHeight: FixedHeightType = ({ children }) => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
};

export default FixedHeight;

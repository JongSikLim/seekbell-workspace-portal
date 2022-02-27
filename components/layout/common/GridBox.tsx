import React from 'react';

type GridBoxProps = {
  children: JSX.Element[] | JSX.Element;
};

const GridBox: React.FC<GridBoxProps> = (props) => {
  const { children } = props;
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      {children}
    </div>
  );
};

export default GridBox;

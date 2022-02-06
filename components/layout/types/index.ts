import React from 'react';

export type LayoutComponent = React.FC<{
  children: JSX.Element | JSX.Element[];
}>;

import React from 'react';
import { Contents, Footer, Header, LNB } from './components';
import { GridBox, Grid, FixedHeight } from './common';

type MainLayoutProps = {
  children: JSX.Element[] | JSX.Element;
};

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { children } = props;

  return (
    <FixedHeight>
      <GridBox>
        <Grid flex={2} minWidth={200}>
          <LNB>
            <></>
          </LNB>
        </Grid>
        <Grid flex={8}>
          <Header>
            <></>
          </Header>
          <Contents>{children}</Contents>
          <Footer>
            <></>
          </Footer>
        </Grid>
      </GridBox>
    </FixedHeight>
  );
};

export default MainLayout;

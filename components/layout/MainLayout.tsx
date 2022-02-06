import React from 'react';
import { Contents, Footer, Header, LNB } from './components';
import { GridBox, Grid, FixedHeight } from './common';

type MainLayoutProps = {
  lnb: JSX.Element[] | JSX.Element;
  header: JSX.Element[] | JSX.Element;
  contents: JSX.Element[] | JSX.Element;
  footer: JSX.Element[] | JSX.Element;
};

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { lnb, header, contents, footer } = props;

  return (
    <FixedHeight>
      <GridBox>
        <Grid flex={2} minWidth={400}>
          <LNB>{lnb}</LNB>
        </Grid>
        <Grid flex={8}>
          <Header>{header}</Header>
          <Contents>{contents}</Contents>
          <Footer>{footer}</Footer>
        </Grid>
      </GridBox>
    </FixedHeight>
  );
};

export default MainLayout;

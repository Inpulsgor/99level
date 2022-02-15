import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer, MainWrapper } from 'common/layout';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Layout;

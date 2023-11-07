import { Loader } from 'components/common/Loader';
import { Navigation } from 'components/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ContentContainer, Header, Main } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <ContentContainer>
            <Outlet />
          </ContentContainer>
        </Suspense>
      </Main>
    </>
  );
};

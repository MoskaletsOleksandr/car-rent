import { SharedLayout } from 'components/SharedLayout';
import { GlobalStyles } from 'GlobalStyles';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/HomePage'));
const CarCatalog = lazy(() => import('pages/CarCatalog'));
const FavouriteCatalog = lazy(() => import('pages/FavouriteCatalog'));

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<CarCatalog />} />
          <Route path="/favorites" element={<FavouriteCatalog />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};

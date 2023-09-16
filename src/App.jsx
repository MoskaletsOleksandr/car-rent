import { SharedLayout } from 'components/SharedLayout';
import { GlobalStyles } from 'GlobalStyles';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getFilterValuesThunk } from 'redux/thunks';

const Home = lazy(() => import('pages/HomePage'));
const CarCatalog = lazy(() => import('pages/CarCatalog'));
const FavouriteCatalog = lazy(() => import('pages/FavouriteCatalog'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilterValuesThunk());
  }, [dispatch]);

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

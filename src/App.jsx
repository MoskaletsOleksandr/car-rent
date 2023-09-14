import axios from "axios";
import { SharedLayout } from "components/SharedLayout";
import { GlobalStyles } from "GlobalStyles";
import { useEffect } from "react";
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import('pages/HomePage'))
const CarCatalog = lazy(() => import('pages/CarCatalog'))
const FavouriteCatalog = lazy(() => import('pages/FavouriteCatalog'))

export const App = () => {

  useEffect(() => {
  const fetchData = async () => {
    try {
      const { data } = await axios.get('https://65035beaa0f2c1f3faebd856.mockapi.io/adverts');
      console.log('data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);
  
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
  )
};

import CarItem from 'components/CarItem/CarItem';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCars } from 'redux/slice';
import { getCarsQuantityThunk, getCarsThunk } from 'redux/thunks';
import { List, ListWrapper } from './CarList.styled';

export const CarsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cars = useSelector(state => state.cars.items);
  const carsQuantity = useSelector(state => state.cars.itemsQuantity);
  const [showMoreBtn, setShowMorerBtn] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsThunk(currentPage));
    dispatch(getCarsQuantityThunk());
  }, [dispatch, currentPage]);

  useEffect(() => {
    return () => {
      dispatch(clearCars());
    };
  }, [dispatch]);

  useEffect(() => {
    if (cars.length === carsQuantity) {
      setShowMorerBtn(false);
    }
  }, [cars, carsQuantity]);

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <ListWrapper>
      <List>
        {cars.map(car => (
          <CarItem key={car.id} car={car} />
        ))}
      </List>
      {showMoreBtn && <button onClick={handleLoadMore}>Load more</button>}
    </ListWrapper>
  );
};
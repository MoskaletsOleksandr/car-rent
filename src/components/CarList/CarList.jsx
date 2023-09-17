import CarItem from 'components/CarItem/CarItem';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarsQuantity } from 'redux/selectors';
import { clearCars } from 'redux/slice';
import { List, ListWrapper, LoadMoreBtn } from './CarList.styled';

export const CarsList = ({ cars, handleLoadMore }) => {
  const [showMoreBtn, setShowMorerBtn] = useState(true);
  const carsQuantity = useSelector(selectCarsQuantity);
  const dispatch = useDispatch();

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

  return (
    <ListWrapper>
      <List>
        {cars.map(car => (
          <CarItem key={car.id} car={car} />
        ))}
      </List>
      {handleLoadMore && showMoreBtn && (
        <LoadMoreBtn onClick={() => handleLoadMore()}>Load more</LoadMoreBtn>
      )}
    </ListWrapper>
  );
};

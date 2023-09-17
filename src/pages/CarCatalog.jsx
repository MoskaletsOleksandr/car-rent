import { CarsList } from 'components/CarList';
import { CarsFilter } from 'components/CarsFilter';
import { SectionTitle } from 'components/common/SectionTitle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarsItems } from 'redux/selectors';
import {
  getCarsQuantityThunk,
  getCarsThunk,
  getMoreCarsThunk,
} from 'redux/thunks';

const CarCatalog = () => {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [shouldFetchMore, setShouldFetchMore] = useState(false);
  const cars = useSelector(selectCarsItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getCarsThunk({
        page: 1,
        rentalPrice: selectedPriceRange,
        make: selectedMake,
      })
    );
    dispatch(
      getCarsQuantityThunk({
        rentalPrice: selectedPriceRange,
        make: selectedMake,
      })
    );
  }, [dispatch, selectedPriceRange, selectedMake]);

  useEffect(() => {
    if (shouldFetchMore) {
      dispatch(getMoreCarsThunk({ page: currentPage }));
    }
  }, [dispatch, currentPage, shouldFetchMore]);

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
    setShouldFetchMore(true);
  };

  const handleMakeChange = event => {
    setSelectedMake(event.target.value);
    setSelectedPriceRange('');
    setCurrentPage(1);
    setShouldFetchMore(false);
  };

  const handlePriceRangeChange = event => {
    setSelectedPriceRange(event.target.value);
    setSelectedMake('');
    setCurrentPage(1);
    setShouldFetchMore(false);
  };

  return (
    <>
      <SectionTitle title="Find a car with this Car Catalog" />
      <CarsFilter
        handleMakeChange={handleMakeChange}
        handlePriceRangeChange={handlePriceRangeChange}
      />
      <CarsList cars={cars} handleLoadMore={handleLoadMore} />
    </>
  );
};

export default CarCatalog;

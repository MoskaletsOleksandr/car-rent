import { CarsList } from 'components/CarList';
import { CarsFilter } from 'components/CarsFilter';
import { Section } from 'components/common/Section';
import { SectionTitle } from 'components/common/SectionTitle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarsItems, selectFilterValues } from 'redux/selectors';
import {
  getCarsByMileageThunk,
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
  const filterValues = useSelector(selectFilterValues);
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

  const handleMakeChange = value => {
    setSelectedMake(value);
    setSelectedPriceRange('');
    setCurrentPage(1);
    setShouldFetchMore(false);
  };

  const handlePriceRangeChange = value => {
    setSelectedPriceRange(value);
    setSelectedMake('');
    setCurrentPage(1);
    setShouldFetchMore(false);
  };

  const handleApplyMileageFilter = (minMileage, maxMileage) => {
    dispatch(getCarsByMileageThunk({ minMileage, maxMileage }));
  };

  return (
    <Section>
      <SectionTitle title="Find a car with this Car Catalog" />
      <CarsFilter
        filterValues={filterValues}
        handleMakeChange={handleMakeChange}
        handlePriceRangeChange={handlePriceRangeChange}
        handleApplyMileageFilter={handleApplyMileageFilter}
      />
      <CarsList cars={cars} handleLoadMore={handleLoadMore} />
    </Section>
  );
};

export default CarCatalog;

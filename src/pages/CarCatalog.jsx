import { CarsList } from 'components/CarList';
import { CarsFilter } from 'components/CarsFilter';
import { Container } from 'components/common/Container';
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

  const handleApplyMileageFilter = (minMileage, maxMileage) => {
    dispatch(getCarsByMileageThunk({ minMileage, maxMileage }));
  };

  return (
    <Section>
      <Container>
        <SectionTitle title="Find a car with this Car Catalog" />
        <CarsFilter
          filterValues={filterValues}
          handleMakeChange={handleMakeChange}
          handlePriceRangeChange={handlePriceRangeChange}
          handleApplyMileageFilter={handleApplyMileageFilter}
        />
        {/* {cars === [] ? ( */}
        <CarsList cars={cars} handleLoadMore={handleLoadMore} />
        {/* ) : (
        <p>any cars by mileage</p>
      )} */}
      </Container>
    </Section>
  );
};

export default CarCatalog;

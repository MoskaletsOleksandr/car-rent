import { CarsList } from 'components/CarList';
import { CarsFilter } from 'components/CarsFilter';
import { Container } from 'components/common/Container';
import { Section } from 'components/common/Section';
import { SectionTitle } from 'components/common/SectionTitle';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFavourites } from 'redux/selectors';
import { filterCarsByMileage } from 'utils/filterCarsByMileage';
import { getFilterValues } from 'utils/getFilterValues';

const FavouriteCatalog = () => {
  const cars = useSelector(selectFavourites);
  const [filteredCars, setFilteredCars] = useState(cars);
  const filterValues = getFilterValues(cars);

  useEffect(() => {
    setFilteredCars(cars);
  }, [cars]);

  const handleMakeChange = value => {
    const filteredCarsByMake = cars.filter(car => car.make === value);
    setFilteredCars(filteredCarsByMake);
  };

  const handlePriceRangeChange = value => {
    const filteredCarsByPriceRange = cars.filter(
      car => car.rentalPrice === `$${value}`
    );
    setFilteredCars(filteredCarsByPriceRange);
  };

  const handleApplyMileageFilter = (minMileage, maxMileage) => {
    const filteredCars = filterCarsByMileage(cars, minMileage, maxMileage);
    setFilteredCars(filteredCars);
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
        <CarsList cars={filteredCars} />
      </Container>
    </Section>
  );
};

export default FavouriteCatalog;

import { CarsList } from 'components/CarList';
import { CarsFilter } from 'components/CarsFilter';
import { SectionTitle } from 'components/common/SectionTitle';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFavourites } from 'redux/selectors';
import { filterCarsByMileage } from 'utils/filterCarsByMileage';
import { getFilterValues } from 'utils/getFilterValues';

const FavouriteCatalog = () => {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const cars = useSelector(selectFavourites);
  const [filteredCars, setFilteredCars] = useState([]);

  console.log(selectedMake);
  console.log(selectedPriceRange);

  useEffect(() => {
    setFilteredCars(cars);
  }, [cars]);
  const filterValues = getFilterValues(cars);

  const handleMakeChange = event => {
    const selectedMakeValue = event.target.value;
    setSelectedMake(selectedMakeValue);
    setSelectedPriceRange('');

    const filteredCarsByMake = cars.filter(
      car => car.make === selectedMakeValue
    );
    setFilteredCars(filteredCarsByMake);
  };

  const handlePriceRangeChange = event => {
    const selectedPriceRangeValue = event.target.value;
    setSelectedPriceRange(selectedPriceRangeValue);
    setSelectedMake('');

    const filteredCarsByPriceRange = cars.filter(
      car => car.rentalPrice === `$${selectedPriceRangeValue}`
    );
    setFilteredCars(filteredCarsByPriceRange);
  };

  const handleApplyMileageFilter = (minMileage, maxMileage) => {
    const filteredCars = filterCarsByMileage(cars, minMileage, maxMileage);
    setFilteredCars(filteredCars);
  };

  return (
    <>
      <SectionTitle title="Find a car with this Car Catalog" />
      <CarsFilter
        filterValues={filterValues}
        handleMakeChange={handleMakeChange}
        handlePriceRangeChange={handlePriceRangeChange}
        handleApplyMileageFilter={handleApplyMileageFilter}
      />
      {/* {filteredCars === [] ? ( */}
      <CarsList cars={filteredCars} />
      {/* ) : (
        <p>any cars by mileage</p>
      )} */}
    </>
  );
};

export default FavouriteCatalog;

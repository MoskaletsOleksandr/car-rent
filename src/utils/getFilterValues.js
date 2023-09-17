export const getFilterValues = cars => {
  const makesSet = new Set(cars.map(car => car.make));
  const makes = Array.from(makesSet).sort();

  const priceRangesSet = new Set(
    cars.map(car => parseFloat(car.rentalPrice.replace('$', '')))
  );
  const priceRanges = Array.from(priceRangesSet).sort((a, b) => a - b);

  const filterValues = { makes, priceRanges };

  return filterValues;
};

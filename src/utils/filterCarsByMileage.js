export const filterCarsByMileage = (cars, minMileage, maxMileage) => {
  return cars.filter(car => {
    const mileage = car.mileage;
    return mileage >= minMileage && mileage <= maxMileage;
  });
};

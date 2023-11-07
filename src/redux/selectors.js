import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars;

export const selectCarsItems = createSelector([selectCars], cars => cars.items);

export const selectCarsQuantity = createSelector(
  [selectCars],
  cars => cars.itemsQuantity
);

export const selectFilterValues = createSelector(
  [selectCars],
  cars => cars.filterValues
);

export const selectFavourites = createSelector(
  [selectCars],
  cars => cars.favourites
);

export const selectIsLoading = createSelector(
  [selectCars],
  cars => cars.isLoading
);

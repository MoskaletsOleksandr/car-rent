import { configureStore } from '@reduxjs/toolkit';
import { CarsReducer } from './slice';

export const store = configureStore({
  reducer: {
    cars: CarsReducer,
  },
});

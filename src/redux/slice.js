import { createSlice } from '@reduxjs/toolkit';
import { carsInitialState } from './initialState';
import {
  getCarsQuantityThunk,
  getCarsThunk,
  getFilterValuesThunk,
  getMoreCarsThunk,
} from './thunks';

const handleGetCarsFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = [...payload];
};

const handleGetMoreCarsFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = [...state.items, ...payload];
};

const handleGetCarsQuantityFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.itemsQuantity = payload;
};

const handleGetFilterValuesFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.filterValues = payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getCarsThunk.fulfilled, handleGetCarsFulfilled)
      .addCase(getMoreCarsThunk.fulfilled, handleGetMoreCarsFulfilled)
      .addCase(getCarsQuantityThunk.fulfilled, handleGetCarsQuantityFulfilled)
      .addCase(getFilterValuesThunk.fulfilled, handleGetFilterValuesFulfilled);
  },
  reducers: {
    clearCars: state => {
      state.items = [];
    },
  },
});

export const { clearCars } = carsSlice.actions;

export const CarsReducer = carsSlice.reducer;

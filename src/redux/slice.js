import { createSlice } from '@reduxjs/toolkit';
import { carsInitialState } from './initialState';
import { getCarsQuantityThunk, getCarsThunk } from './thunks';

const handleGetCarsFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = [...state.items, ...payload];
};

const handleGetCarsQuantityFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.itemsQuantity = payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getCarsThunk.fulfilled, handleGetCarsFulfilled)
      .addCase(getCarsQuantityThunk.fulfilled, handleGetCarsQuantityFulfilled);
  },
  reducers: {
    clearCars: state => {
      state.items = [];
    },
  },
});

export const { clearCars } = carsSlice.actions;

export const CarsReducer = carsSlice.reducer;

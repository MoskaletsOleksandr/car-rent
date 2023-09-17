import { createSlice } from '@reduxjs/toolkit';
import { carsInitialState } from './initialState';
import {
  getCarsByMileageThunk,
  getCarsQuantityThunk,
  getCarsThunk,
  getFilterValuesThunk,
  getMoreCarsThunk,
} from './thunks';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.items = [];
  state.error = payload;
};

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

const handleGetCarsByMileageFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = [...payload];
  state.itemsQuantity = payload.length;
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
      .addCase(getCarsByMileageThunk.fulfilled, handleGetCarsByMileageFulfilled)
      .addCase(getFilterValuesThunk.fulfilled, handleGetFilterValuesFulfilled)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending);
  },
  reducers: {
    clearCars: state => {
      state.items = [];
    },
    addToFavourites: (state, action) => {
      const carToAdd = action.payload;
      state.favourites.push(carToAdd);
    },
    removeFromFavourites: (state, action) => {
      const carIdToRemove = action.payload;
      state.favourites = state.favourites.filter(
        car => car.id !== carIdToRemove
      );
    },
  },
});

export const { clearCars, addToFavourites, removeFromFavourites } =
  carsSlice.actions;

export const carsReducer = carsSlice.reducer;

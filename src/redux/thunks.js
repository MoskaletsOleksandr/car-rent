import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCars, getCarsQuantity, getFilterValues } from 'api/carsApi';

export const getCarsThunk = createAsyncThunk(
  'cars/getCars',
  async (params, { rejectWithValue }) => {
    try {
      const cars = await getCars(params);
      return cars;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getMoreCarsThunk = createAsyncThunk(
  'cars/getMoreCars',
  async (params, { rejectWithValue }) => {
    try {
      const cars = await getCars(params);
      return cars;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCarsQuantityThunk = createAsyncThunk(
  'cars/getCarsQuantity',
  async (params, { rejectWithValue }) => {
    try {
      const carsQuantity = await getCarsQuantity(params);
      return carsQuantity;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getFilterValuesThunk = createAsyncThunk(
  'cars/getFilterValues',
  async (_, { rejectWithValue }) => {
    try {
      const filterValues = await getFilterValues();
      return filterValues;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCars, getCarsQuantity } from 'api/carsApi';

export const getCarsThunk = createAsyncThunk(
  'cars/getCars',
  async (page, { rejectWithValue }) => {
    try {
      const cars = await getCars(page);
      return cars;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCarsQuantityThunk = createAsyncThunk(
  'cars/getCarsQuantity',
  async (_, { rejectWithValue }) => {
    try {
      const carsQuantity = await getCarsQuantity();
      return carsQuantity;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

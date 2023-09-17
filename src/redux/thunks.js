import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCarsApi, getCarsApi, getCarsQuantityApi } from 'api/carsApi';
import { filterCarsByMileage } from 'utils/filterCarsByMileage';
import { getFilterValues } from 'utils/getFilterValues';

export const getCarsThunk = createAsyncThunk(
  'cars/getCars',
  async (params, { rejectWithValue }) => {
    try {
      const cars = await getCarsApi(params);
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
      const cars = await getCarsApi(params);
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
      const carsQuantity = await getCarsQuantityApi(params);
      return carsQuantity;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCarsByMileageThunk = createAsyncThunk(
  'cars/getCarsByMileage',
  async ({ minMileage, maxMileage }, { rejectWithValue }) => {
    try {
      const cars = await getAllCarsApi();
      const filteredCars = filterCarsByMileage(cars, minMileage, maxMileage);
      return filteredCars;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getFilterValuesThunk = createAsyncThunk(
  'cars/getFilterValues',
  async (_, { rejectWithValue }) => {
    try {
      const cars = await getAllCarsApi();
      const filterValues = getFilterValues(cars);
      return filterValues;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

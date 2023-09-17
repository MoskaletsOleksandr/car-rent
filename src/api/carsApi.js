import { advertsInstance } from './axiosConfig';

const perPage = 8;

export const getCarsApi = async ({ page = 1, rentalPrice = '', make = '' }) => {
  let queryParams = `?p=${page}&l=${perPage}`;
  if (make) {
    queryParams = `?p=${page}&l=${perPage}&make=${make}`;
  }
  if (rentalPrice) {
    queryParams = `?p=${page}&l=${perPage}&rentalPrice=${rentalPrice}`;
  }
  const { data } = await advertsInstance.get(queryParams);
  return data;
};

export const getCarsQuantityApi = async ({ rentalPrice = '', make = '' }) => {
  let queryParams = null;
  if (make) {
    queryParams = `?make=${make}`;
  }
  if (rentalPrice) {
    queryParams = `?rentalPrice=${rentalPrice}`;
  }
  const { data } = await advertsInstance.get(queryParams);
  return data.length;
};

export const getAllCarsApi = async () => {
  const { data } = await advertsInstance.get();
  return data;
};

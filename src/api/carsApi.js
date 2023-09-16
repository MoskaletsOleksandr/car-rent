import { advertsInstance } from './axiosConfig';

const perPage = 8;

export const getCars = async ({ page = 1, rentalPrice = '', make = '' }) => {
  const rentalPriceNumeric = rentalPrice
    ? parseInt(rentalPrice.slice(1))
    : null;

  let queryParams = `?p=${page}&l=${perPage}`;
  if (make) {
    queryParams = `?p=${page}&l=${perPage}&make=${make}`;
  }
  if (rentalPriceNumeric) {
    queryParams = `?p=${page}&l=${perPage}&rentalPrice=${rentalPriceNumeric}`;
  }
  const { data } = await advertsInstance.get(queryParams);
  return data;
};

export const getCarsQuantity = async ({ rentalPrice = '', make = '' }) => {
  const rentalPriceNumeric = rentalPrice
    ? parseInt(rentalPrice.slice(1))
    : null;

  let queryParams = null;
  if (make) {
    queryParams = `?make=${make}`;
  }
  if (rentalPriceNumeric) {
    queryParams = `?rentalPrice=${rentalPriceNumeric}`;
  }
  const { data } = await advertsInstance.get(queryParams);
  return data.length;
};

export const getAllCars = async () => {
  const { data } = await advertsInstance.get();
  return data;
};

export const getFilterValues = async () => {
  const { data } = await advertsInstance.get();

  const makesSet = new Set(data.map(item => item.make));
  const makes = Array.from(makesSet);

  const priceRangesSet = new Set(data.map(item => item.rentalPrice));
  const priceRanges = Array.from(priceRangesSet);

  return { makes, priceRanges };
};

import { advertsInstance } from './axiosConfig';

const perPage = 8;

export const getCars = async page => {
  const { data } = await advertsInstance.get(`?p=${page}&l=${perPage}`);
  return data;
};

export const getCarsQuantity = async () => {
  const { data } = await advertsInstance.get();
  return data.length;
};

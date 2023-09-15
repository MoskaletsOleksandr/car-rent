import axios from 'axios';

export const advertsInstance = axios.create({
  baseURL: 'https://65035beaa0f2c1f3faebd856.mockapi.io/adverts',
});

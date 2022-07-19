import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://62d630fdd4406e523565f9e8.mockapi.io/api/kabum/',
});

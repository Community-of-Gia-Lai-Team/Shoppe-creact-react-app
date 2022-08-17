// import { useEffect } from 'react';
import axios from '../axios';

export const createNewProductData = (state) => {
    return axios.post(`/api/v1/create-product`, state);
};

export const getAllProducts = (limit) => {
    return axios.get(`/api/v1/all-product-limit?limit=${limit}`);
};

export const getDetailProducts = (id) => {
    return axios.get(`/api/v1/get-detail-product?id=${id}`);
};

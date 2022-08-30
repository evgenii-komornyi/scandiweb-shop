import axios from 'axios';
import {
    getAllCategoryNames,
    getCategoryByName,
    getProductById,
    getAllCurrencies,
} from '../queries/queries';

export const getCategoryNames = () =>
    axios.post(process.env.REACT_APP_GRAPHQL_URI, {
        query: getAllCategoryNames,
    });

export const getCategory = category =>
    axios.post(process.env.REACT_APP_GRAPHQL_URI, {
        query: getCategoryByName(category),
    });

export const getProduct = productId =>
    axios.post(process.env.REACT_APP_GRAPHQL_URI, {
        query: getProductById(productId),
    });

export const getCurrencies = () =>
    axios.post(process.env.REACT_APP_GRAPHQL_URI, { query: getAllCurrencies });

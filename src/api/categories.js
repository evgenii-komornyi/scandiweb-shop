import axios from 'axios';
import { getAllCategories } from '../queries/queries';

export const getCategories = () =>
    axios.post(process.env.REACT_APP_GRAPHQL_URI, {
        query: getAllCategories,
    });

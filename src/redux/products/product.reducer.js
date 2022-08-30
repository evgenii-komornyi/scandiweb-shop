import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProduct } from '../../api/service';

const initialState = {
    product: {},
    isLoaded: false,
    error: null,
};

export const fetchProductById = createAsyncThunk(
    'product/fetchProductById',
    async productId => {
        const response = await getProduct(productId);

        return response.data.data.product;
    }
);

const reducer = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProductById.pending]: (state, action) => {
            if (state.isLoaded) {
                state.isLoaded = false;
            }
        },
        [fetchProductById.fulfilled]: (state, { payload }) => {
            if (!state.isLoaded) {
                state.isLoaded = true;
                state.product = payload;
            }
        },
        [fetchProductById.rejected]: (state, action) => {
            if (state.isLoaded) {
                state.isLoaded = false;
                state.error = action.error;
            }
        },
    },
});

export const productReducer = reducer.reducer;

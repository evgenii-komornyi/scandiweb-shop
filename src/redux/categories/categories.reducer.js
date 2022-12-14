import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategoryNames } from '../../api/service';

const initialState = {
    categories: [],
    isLoaded: false,
    error: null,
};

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const response = await getCategoryNames();

        return response.data.data.categories;
    }
);

const reducer = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCategories.pending]: (state, action) => {
            if (state.isLoaded) {
                state.isLoaded = false;
            }
        },
        [fetchCategories.fulfilled]: (state, { payload }) => {
            if (!state.isLoaded) {
                state.isLoaded = true;
                state.categories = payload;
            }
        },
        [fetchCategories.rejected]: (state, action) => {
            if (state.isLoaded) {
                state.isLoaded = false;
                state.error = action.error;
            }
        },
    },
});

export const categoriesReducer = reducer.reducer;

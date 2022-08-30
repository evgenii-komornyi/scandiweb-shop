import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategory } from '../../api/service';

const initialState = {
    category: {},
    isLoaded: false,
    error: null,
};

export const fetchCategoryByName = createAsyncThunk(
    'category/fetchCategoryByName',
    async category => {
        const response = await getCategory(category);

        return response.data.data.category;
    }
);

const reducer = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCategoryByName.pending]: (state, action) => {
            if (state.isLoaded) {
                state.isLoaded = false;
            }
        },
        [fetchCategoryByName.fulfilled]: (state, { payload }) => {
            if (!state.isLoaded) {
                state.isLoaded = true;
                state.category = payload;
            }
        },
        [fetchCategoryByName.rejected]: (state, action) => {
            if (state.isLoaded) {
                state.isLoaded = false;
                state.error = action.error;
            }
        },
    },
});

export const categoryReducer = reducer.reducer;

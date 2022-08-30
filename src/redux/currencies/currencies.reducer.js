import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrencies } from '../../api/service';

const initialState = {
    currencies: [],
    currentCurrency: 'USD',
    isLoaded: false,
    error: null,
};

export const fetchCurrencies = createAsyncThunk(
    'currencies/fetchCurrencies',
    async () => {
        const response = await getCurrencies();

        return response.data.data.currencies;
    }
);

const reducer = createSlice({
    name: 'currencies',
    initialState,
    reducers: {
        changeCurrentCurrency: (state, { payload }) => {
            state = { ...state, currentCurrency: payload };
            return state;
        },
    },
    extraReducers: {
        [fetchCurrencies.pending]: (state, action) => {
            if (state.isLoaded) {
                state.isLoaded = false;
            }
        },
        [fetchCurrencies.fulfilled]: (state, { payload }) => {
            if (!state.isLoaded) {
                state.isLoaded = true;
                state.currencies = payload;
            }
        },
        [fetchCurrencies.rejected]: (state, action) => {
            if (state.isLoaded) {
                state.isLoaded = false;
                state.error = action.error;
            }
        },
    },
});

export const { changeCurrentCurrency } = reducer.actions;
export const currenciesReducer = reducer.reducer;

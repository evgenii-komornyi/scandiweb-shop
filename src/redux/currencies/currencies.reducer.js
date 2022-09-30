import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrencies } from '../../api/service';
import {
    getActiveIndexFromStorage,
    getCurrencyFromStorage,
    saveToStorage,
} from '../../helpers/storage.helper';

const initialState = {
    currencies: [],
    currentCurrency: getCurrencyFromStorage('currentCurrency'),
    isOpen: false,
    activeIndex: getActiveIndexFromStorage('activeIndex'),
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

            saveToStorage('currentCurrency', state.currentCurrency);

            return state;
        },
        setIsCurrenciesOpen: (state, { payload }) => {
            return { ...state, isOpen: payload };
        },
        setActiveIndex: (state, { payload }) => {
            state = { ...state, activeIndex: payload };

            saveToStorage('activeIndex', state.activeIndex);

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

export const { changeCurrentCurrency, setIsCurrenciesOpen, setActiveIndex } =
    reducer.actions;
export const currenciesReducer = reducer.reducer;

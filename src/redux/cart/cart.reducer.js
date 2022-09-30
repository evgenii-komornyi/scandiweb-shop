import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart, removeItemFromCart } from '../../helpers/cart.helper';
import { getFromStorage, saveToStorage } from '../../helpers/storage.helper';

const initialState = {
    isOpen: false,
    items: getFromStorage('items'),
};

const reducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setIsCartOpen: (state, { payload }) => {
            return { ...state, isOpen: payload };
        },
        addItem: (state, { payload }) => {
            state = {
                ...state,
                items: addItemToCart(state.items, payload),
            };

            saveToStorage('items', state.items);

            return state;
        },

        removeItem: (state, { payload }) => {
            state = {
                ...state,
                items: removeItemFromCart(state.items, payload),
            };

            saveToStorage('items', state.items);

            return state;
        },
    },
});

export const { setIsCartOpen, addItem, removeItem } = reducer.actions;
export const cartReducer = reducer.reducer;

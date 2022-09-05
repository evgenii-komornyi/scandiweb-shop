import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart, removeItemFromCart } from '../../helpers/cart.helper';

const initialState = {
    isOpen: false,
    items: [],
};

const reducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setIsCartOpen: state => {
            return { ...state, isOpen: !state.isOpen };
        },
        addItem: (state, { payload }) => {
            state = {
                ...state,
                items: addItemToCart(state.items, payload),
            };

            return state;
        },

        removeItem: (state, { payload }) => {
            state = {
                ...state,
                items: removeItemFromCart(state.items, payload),
            };

            return state;
        },
    },
});

export const { setIsCartOpen, addItem, removeItem } = reducer.actions;
export const cartReducer = reducer.reducer;

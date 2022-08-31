import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart, calculateTotalPrice } from '../../helpers/cart.helper';

const initialState = {
    isOpen: false,
    items: [],
    total: 0,
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

            state.total = calculateTotalPrice(state.items);

            return state;
        },
    },
});

export const { setIsCartOpen, addItem } = reducer.actions;
export const cartReducer = reducer.reducer;

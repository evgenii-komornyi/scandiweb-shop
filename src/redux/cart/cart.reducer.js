import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    items: [
        { id: 0, item: 'item0' },
        { id: 1, item: 'item1' },
        { id: 2, item: 'item2' },
    ],
    total: 0,
};

const reducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setIsCartOpen: state => {
            state = {
                ...state,
                isOpen: !state.isOpen,
            };

            return state;
        },
    },
});

export const { setIsCartOpen } = reducer.actions;
export const cartReducer = reducer.reducer;

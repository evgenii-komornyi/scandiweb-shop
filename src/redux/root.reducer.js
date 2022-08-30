import { categoriesReducer } from './categories/categories.reducer';
import { categoryReducer } from './categories/category.reducer';
import { productReducer } from './products/product.reducer';
import { currenciesReducer } from './currencies/currencies.reducer';
//import { cartReducer } from './cart/cart.reducer';

export const rootReducer = {
    categories: categoriesReducer,
    category: categoryReducer,
    product: productReducer,
    currencies: currenciesReducer,
    //cart: cartReducer,
};

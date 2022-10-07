import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { fetchCategories } from './redux/categories/categories.reducer';
import { fetchCurrencies } from './redux/currencies/currencies.reducer';

import MainPage from './pages/main-page/main-page';
import CategoryPage from './pages/category-page/category-page';
import ProductPage from './pages/product-page/product-page';
import CartPage from './pages/cart-page/cart-page';
import Header from './components/header/header.component';

import Spinner from './components/spinner/spinner.component';

export class App extends Component {
    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchCurrencies();
    }

    render() {
        const isCategoriesLoaded = this.props.categories.isLoaded;
        const isCurrenciesLoaded = this.props.currencies.isLoaded;

        return isCategoriesLoaded && isCurrenciesLoaded ? (
            <>
                <Header />
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route path="/:category" element={<CategoryPage />} />
                    <Route
                        path="/:category/:productId"
                        element={<ProductPage />}
                    />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </>
        ) : (
            <Spinner />
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
    currencies: state.currencies,
});

const mapDispatchToProps = dispatch => ({
    fetchCurrencies: () => dispatch(fetchCurrencies()),
    fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

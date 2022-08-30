import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { fetchCategories } from './redux/categories/categories.reducer';

import MainPage from './pages/main-page/main-page';
import CategoryPage from './pages/category-page/category-page';
import ProductPage from './pages/product-page/product-page';
import CartPage from './pages/cart-page/cart-page';
import Header from './components/header/header.component';

export class App extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        return (
            <>
                <Header />
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route path="/:category" element={<CategoryPage />} />
                    <Route
                        path="/:category/:productId"
                        element={<ProductPage />}
                    />
                    <Route path="/checkout" element={<CartPage />} />
                </Routes>
            </>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

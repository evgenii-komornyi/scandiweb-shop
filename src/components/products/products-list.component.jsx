import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCategoryByName } from '../../redux/categories/category.reducer';

import ProductItem from '../product-item/product-item.component';

import {
    ProductsContainer,
    CategoryItemsContainer,
} from './products-list.styles';

class ProductsList extends Component {
    componentDidMount() {
        this.props.fetchCategoryByName('all');
    }

    render() {
        const { category, isLoaded } = this.props.category;

        return isLoaded ? (
            <ProductsContainer>
                <CategoryItemsContainer>
                    {category.products
                        .filter((_, index) => index < 6)
                        .map(product => (
                            <ProductItem
                                key={product.id}
                                product={product}
                                category={category.name}
                                isMainPage={true}
                            />
                        ))}
                </CategoryItemsContainer>
            </ProductsContainer>
        ) : (
            <h1>Loading...</h1>
        );
    }
}

const mapStateToProps = state => ({
    category: state.category,
});

const mapDispatchToProps = dispatch => ({
    fetchCategoryByName: category => dispatch(fetchCategoryByName(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);

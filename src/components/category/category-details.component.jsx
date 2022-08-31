import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';

import { withRouter } from '../../utils/withRouter';
import { fetchCategoryByName } from '../../redux/categories/category.reducer';

import ProductItem from '../product-item/product-item.component';

import {
    CategoryTitle,
    ProductsContainer,
    CategoryItemsContainer,
} from '../products/products-list.styles';

class CategoryDetails extends Component {
    componentDidMount() {
        this.props.fetchCategoryByName(this.props.params.category);
    }

    componentDidUpdate(prevProps) {
        if (this.props.params.category !== prevProps.params.category) {
            this.props.fetchCategoryByName(this.props.params.category);
        }
    }

    render() {
        const { category, isLoaded } = this.props.category;

        return (
            <>
                {isLoaded ? (
                    <>
                        <CategoryTitle>{category.name}</CategoryTitle>
                        <ProductsContainer>
                            <CategoryItemsContainer>
                                {category.products
                                    .filter((_, index) => index < 6)
                                    .map(product => (
                                        <ProductItem
                                            key={product.id}
                                            product={product}
                                            category={category.name}
                                        />
                                    ))}
                            </CategoryItemsContainer>
                        </ProductsContainer>
                    </>
                ) : (
                    <h1>Loading...</h1>
                )}
            </>
        );
    }
}

const mapStateToProps = state => ({ category: state.category });

const mapDispatchToProps = dispatch => ({
    fetchCategoryByName: category => dispatch(fetchCategoryByName(category)),
});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(CategoryDetails);

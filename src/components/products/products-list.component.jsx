import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCategoryByName } from '../../redux/categories/category.reducer';

import ProductItem from '../product-item/product-item.component';
import Spinner from '../spinner/spinner.component';

import {
    ProductsContainer,
    CategoryItemsContainer,
} from './products-list.styles';

class ProductsList extends Component {
    componentDidMount() {
        const {
            categories: { categories },
            fetchCategoryByName,
        } = this.props;

        fetchCategoryByName(categories[0].name);
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
            <Spinner />
        );
    }
}

const mapStateToProps = state => ({
    category: state.category,
    categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
    fetchCategoryByName: category => dispatch(fetchCategoryByName(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);

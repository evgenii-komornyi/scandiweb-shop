import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { withRouter } from '../../utils/withRouter';

import { convertPrice } from '../../helpers/price.helper';

import Price from '../price/price.component';
import CustomButton from '../custom-button/custom-button.component';

import { fetchProductById } from '../../redux/products/product.reducer';
import { addItem } from '../../redux/cart/cart.reducer';

class ProductDetails extends Component {
    componentDidMount() {
        this.props.fetchProductById(this.props.params.productId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.params.productId !== prevProps.params.productId) {
            this.props.fetchProductById(this.props.params.productId);
        }
    }

    render() {
        const {
            product: { product },
            currencies: { currentCurrency },
            addItem,
        } = this.props;

        const isProductLoaded = this.props.product.isLoaded;
        const isCurrenciesLoaded = this.props.currencies.isLoaded;

        return (
            <>
                {isProductLoaded && isCurrenciesLoaded ? (
                    <>
                        <h1>{product.name}</h1>
                        {
                            convertPrice(product.prices, currentCurrency)
                                .correctSymbol
                        }
                        <Price>
                            {
                                convertPrice(product.prices, currentCurrency)
                                    .correctPrice
                            }
                        </Price>
                        <CustomButton onClick={() => addItem(product)}>
                            Add to cart
                        </CustomButton>
                    </>
                ) : (
                    <h1>Loading...</h1>
                )}
            </>
        );
    }
}

const mapStateToProps = state => ({
    product: state.product,
    currencies: state.currencies,
});

const mapDispatchToProps = dispatch => ({
    fetchProductById: productId => dispatch(fetchProductById(productId)),
    addItem: product => dispatch(addItem(product)),
});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProductDetails);

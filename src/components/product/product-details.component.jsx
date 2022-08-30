import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { withRouter } from '../../utils/withRouter';

import Price from '../price/price.component';

import { fetchProductById } from '../../redux/products/product.reducer';

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
        const { product, isLoaded } = this.props.product;

        return (
            <>
                {isLoaded ? (
                    <>
                        <h1>{product.name}</h1>
                        <Price prices={product?.prices} />
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
});

const mapDispatchToProps = dispatch => ({
    fetchProductById: productId => dispatch(fetchProductById(productId)),
});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProductDetails);

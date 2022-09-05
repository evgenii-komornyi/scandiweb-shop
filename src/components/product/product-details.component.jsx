import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { withRouter } from '../../utils/withRouter';
import DOMPurify from 'dompurify';

import CustomButton from '../custom-button/custom-button.component';

import { fetchProductById } from '../../redux/products/product.reducer';
import { addItem } from '../../redux/cart/cart.reducer';
import Price from '../price/price.component';

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
        const { addItem } = this.props;

        console.log(product);

        const sanitize = data => ({ __html: DOMPurify.sanitize(data) });

        return (
            <>
                {isLoaded ? (
                    <>
                        {product.gallery.map((image, index) => (
                            <img
                                key={index}
                                width="10%"
                                src={image}
                                alt="unique"
                            />
                        ))}
                        <img src={product.gallery[0]} alt="unique" />
                        <h1>{product.name}</h1>
                        <h3>Price: </h3>
                        <Price prices={product.prices} />
                        {product.attributes.length &&
                            product.attributes.map(attribute => (
                                <div key={attribute.id}>
                                    <p>{attribute.name}</p>
                                    <ul>
                                        {attribute.items.map(item => (
                                            <li key={item.id}>
                                                {item.displayValue}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        <CustomButton onClick={() => addItem(product)}>
                            Add to cart
                        </CustomButton>
                        <div
                            dangerouslySetInnerHTML={sanitize(
                                product.description
                            )}
                        />
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
    addItem: product => dispatch(addItem(product)),
});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProductDetails);

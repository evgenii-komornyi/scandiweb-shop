import React, { Component } from 'react';

import CartSrc from '../../img/add-to-cart-button.png';
import {
    AddToCartButtonContainer,
    CartImage,
} from './add-to-cart-button.styles';

export class AddToCartButton extends Component {
    addItemToCart = e => {
        const { product, handleAddItemToCart } = this.props;

        handleAddItemToCart(product);

        e.stopPropagation();
    };

    render() {
        return (
            <AddToCartButtonContainer onClick={this.addItemToCart}>
                <CartImage src={CartSrc} alt="cart" />
            </AddToCartButtonContainer>
        );
    }
}

export default AddToCartButton;

import React, { Component } from 'react';

import CartSrc from '../../img/add-to-cart-button.png';
import {
    AddToCartButtonContainer,
    CartImage,
} from './add-to-cart-button.styles';

export class AddToCartButton extends Component {
    render() {
        const { product, handleAddItemToCart } = this.props;

        return (
            <AddToCartButtonContainer
                onClick={e => {
                    handleAddItemToCart(product);
                    e.stopPropagation();
                }}
            >
                <CartImage src={CartSrc} alt="cart" />
            </AddToCartButtonContainer>
        );
    }
}

export default AddToCartButton;

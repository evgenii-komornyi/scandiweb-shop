import React, { Component } from 'react';

import CartSrc from '../../img/empty_cart.png';
import CartOverlay from '../cart-overlay/cart-overlay.component';

import {
    CartButtonContainer,
    CartImage,
    ProductsCount,
} from './cart-button.styles';

class CartButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    render() {
        const cartItems = [
            { id: 0, item: 'item1' },
            { id: 2, item: 'item2' },
        ];

        return (
            <CartButtonContainer
                onClick={() => this.setState({ isOpen: !this.state.isOpen })}
            >
                <CartImage src={CartSrc} alt="cart" />
                {cartItems.length > 0 && (
                    <ProductsCount>{cartItems.length}</ProductsCount>
                )}
                <CartOverlay isOpen={this.state.isOpen} />
            </CartButtonContainer>
        );
    }
}

export default CartButton;

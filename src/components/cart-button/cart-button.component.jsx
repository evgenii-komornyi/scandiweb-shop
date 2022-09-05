import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setIsCartOpen } from '../../redux/cart/cart.reducer';

import { calculateItemsCount } from '../../helpers/cart.helper';

import CartSrc from '../../img/empty_cart.png';
import CartOverlay from '../cart-overlay/cart-overlay.component';

import {
    CartButtonContainer,
    CartImage,
    ProductsCount,
} from './cart-button.styles';

class CartButton extends Component {
    render() {
        const { items } = this.props.cart;

        return (
            <CartButtonContainer onClick={() => this.props.setIsCartOpen()}>
                <CartImage src={CartSrc} alt="cart" />
                {items.length > 0 && (
                    <ProductsCount>{calculateItemsCount(items)}</ProductsCount>
                )}
                <CartOverlay />
            </CartButtonContainer>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
    setIsCartOpen: () => dispatch(setIsCartOpen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);

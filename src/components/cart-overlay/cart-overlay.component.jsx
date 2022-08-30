import React, { Component } from 'react';

import {
    CartOverlayContainer,
    MiniCartContainer,
    MiniCartItem,
} from './cart-overlay.styles';

class CartOverlay extends Component {
    render() {
        return (
            <>
                <CartOverlayContainer isOpen={this.props.isOpen}>
                    <MiniCartContainer>
                        <MiniCartItem>1</MiniCartItem>
                        <MiniCartItem>2</MiniCartItem>
                    </MiniCartContainer>
                </CartOverlayContainer>
            </>
        );
    }
}

export default CartOverlay;

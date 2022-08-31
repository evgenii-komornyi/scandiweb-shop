import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    CartOverlayContainer,
    MiniCartContainer,
    MiniCartItem,
} from './cart-overlay.styles';

class CartOverlay extends Component {
    render() {
        const { isOpen, items, total } = this.props.cart;
        return (
            <>
                <CartOverlayContainer isOpen={isOpen}>
                    <MiniCartContainer>
                        {items.length > 0 ? (
                            <>
                                {items.map(({ id, item }) => (
                                    <MiniCartItem key={id}>{item}</MiniCartItem>
                                ))}
                                <div className="totalContainer">
                                    <h3>Total:</h3>
                                    <h3>{total}</h3>
                                </div>
                                <div>
                                    <button>view bag</button>
                                    <button>Checkout</button>
                                </div>
                            </>
                        ) : (
                            <h6>Cart is empty.</h6>
                        )}
                    </MiniCartContainer>
                </CartOverlayContainer>
            </>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
});

export default connect(mapStateToProps)(CartOverlay);

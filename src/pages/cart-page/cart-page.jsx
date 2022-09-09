import React, { Component } from 'react';

import Cart from '../../components/cart/cart.component';

import { Container } from '../../styles/common.styles';

class CartPage extends Component {
    render() {
        return (
            <Container>
                <h1
                    style={{
                        fontWeight: 700,
                        letterSpacing: '-2px',
                        fontSize: '32px',
                        lineHeight: '40px',
                    }}
                >
                    CART
                </h1>
                <Cart />
            </Container>
        );
    }
}

export default CartPage;

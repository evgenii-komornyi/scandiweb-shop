import React, { Component } from 'react';

import Cart from '../../components/cart/cart.component';

import { Container } from '../../styles/common.styles';

class CartPage extends Component {
    render() {
        return (
            <Container>
                <h1>Cart</h1>
                <Cart />
            </Container>
        );
    }
}

export default CartPage;

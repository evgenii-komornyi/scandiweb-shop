import React, { Component } from 'react';

import Cart from '../../components/cart/cart.component';

import { Container } from '../../styles/common.styles';
import { Title } from './cart-page.styles';

class CartPage extends Component {
    render() {
        return (
            <Container>
                <Title>CART</Title>
                <Cart />
            </Container>
        );
    }
}

export default CartPage;

import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartSrc from '../../img/add-to-cart-button.png';
import {
    AddToCartButtonContainer,
    CartImage,
} from './add-to-cart-button.styles';

export class AddToCartButton extends Component {
    render() {
        return (
            <AddToCartButtonContainer>
                <CartImage src={CartSrc} alt="cart" />
            </AddToCartButtonContainer>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { convertPrice } from '../../helpers/price.helper';

import CartItem from '../cart-item/cart-item.component';

import { ItemsContainer } from '../cart-overlay/cart-overlay.styles';

export class Cart extends Component {
    render() {
        const {
            cart: { items },
            currencies: { currentCurrency },
        } = this.props;

        const convertedPrice =
            items.length &&
            items.map(item => convertPrice(item.prices, currentCurrency));

        return (
            <ItemsContainer>
                {items.map((item, index) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        index={index}
                        convertedPrice={convertedPrice}
                    />
                ))}
            </ItemsContainer>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
    currencies: state.currencies,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

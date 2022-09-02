import React, { Component } from 'react';
import { connect } from 'react-redux';
import { convertPrice } from '../../helpers/price.helper';

import CartItem from '../cart-item/cart-item.component';

export class Cart extends Component {
    render() {
        const {
            cart: { items },
            currencies: { currentCurrency },
        } = this.props;

        const convertedPrice =
            items.length &&
            items.map(item => convertPrice(item.prices, currentCurrency));

        return items.map((item, index) => (
            <CartItem
                key={item.id}
                item={item}
                index={index}
                convertedPrice={convertedPrice}
            />
        ));
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
    currencies: state.currencies,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

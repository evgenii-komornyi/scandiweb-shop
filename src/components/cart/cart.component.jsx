import React, { Component } from 'react';
import { connect } from 'react-redux';
import { convertMultipleItemsPrice } from '../../helpers/price.helper';

import CartItem from '../cart-item/cart-item.component';
import TotalPrice from '../total-price/total-price.component';

export class Cart extends Component {
    render() {
        const {
            cart: { items },
            currencies: { currentCurrency },
        } = this.props;

        const convertedPrice =
            items.length && convertMultipleItemsPrice(items, currentCurrency);

        return (
            <>
                {items.map((item, index) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        index={index}
                        convertedPrice={convertedPrice}
                    />
                ))}
                <div>
                    <h3>
                        Total:{' '}
                        <TotalPrice
                            items={items}
                            currentCurrency={currentCurrency}
                            convertedPrice={convertedPrice}
                        />
                    </h3>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
    currencies: state.currencies,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

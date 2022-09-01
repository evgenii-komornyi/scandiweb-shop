import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculateTotalPrice } from '../../helpers/cart.helper';
import { convertPrice } from '../../helpers/price.helper';
import Price from '../price/price.component';

import {
    CartOverlayContainer,
    MiniCartContainer,
    MiniCartItem,
} from './cart-overlay.styles';

class CartOverlay extends Component {
    render() {
        const {
            cart: { isOpen, items },
            currencies: { currentCurrency },
        } = this.props;

        const convertedPrice =
            items.length &&
            items.map(item => convertPrice(item.prices, currentCurrency));

        return (
            <>
                <CartOverlayContainer isOpen={isOpen}>
                    <MiniCartContainer>
                        {items.length > 0 ? (
                            <>
                                {items.map(({ id, name, quantity }, index) => (
                                    <MiniCartItem key={id}>
                                        <div className="itemName">{name}</div>
                                        <div className="quantityContainer">
                                            <button
                                                onClick={e =>
                                                    e.stopPropagation()
                                                }
                                            >
                                                +
                                            </button>
                                            {quantity}
                                            <button
                                                onClick={e =>
                                                    e.stopPropagation()
                                                }
                                            >
                                                -
                                            </button>
                                        </div>
                                        <Price>
                                            {
                                                convertedPrice[index]
                                                    .correctSymbol
                                            }{' '}
                                            {convertedPrice[index]
                                                .correctPrice * quantity}
                                        </Price>
                                    </MiniCartItem>
                                ))}
                                <div className="totalContainer">
                                    <h3>Total:</h3>
                                    <Price>
                                        {convertedPrice[0].correctSymbol}{' '}
                                        {calculateTotalPrice(
                                            items,
                                            currentCurrency
                                        )}
                                    </Price>
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
    currencies: state.currencies,
});

export default connect(mapStateToProps)(CartOverlay);

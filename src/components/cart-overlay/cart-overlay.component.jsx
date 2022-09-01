import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculateTotalPrice } from '../../helpers/cart.helper';
import { convertPrice } from '../../helpers/price.helper';
import CartItem from '../cart-item/cart-item.component';
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
                                {items.map((item, index) => (
                                    <MiniCartItem key={item.id}>
                                        <CartItem
                                            item={item}
                                            index={index}
                                            convertedPrice={convertedPrice}
                                        />
                                    </MiniCartItem>
                                ))}
                                <div className="totalContainer">
                                    <h3>Total:</h3>
                                    <Price>
                                        {convertedPrice[0].correctSymbol}{' '}
                                        {Math.round(
                                            calculateTotalPrice(
                                                items,
                                                currentCurrency
                                            ) * 100
                                        ) / 100}
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

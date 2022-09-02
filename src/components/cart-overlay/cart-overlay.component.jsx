import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from '../../utils/withRouter';

import {
    calculateTotalPrice,
    calculateItemsCount,
} from '../../helpers/cart.helper';
import { convertPrice } from '../../helpers/price.helper';

import CartItem from '../cart-item/cart-item.component';
import Price from '../price/price.component';
import CustomButton from '../custom-button/custom-button.component';

import {
    CartOverlayContainer,
    CartContainer,
    CartHeader,
    ItemsContainer,
    CartFooter,
    TotalContainer,
    ButtonsContainer,
} from './cart-overlay.styles';

class CartOverlay extends Component {
    render() {
        const {
            cart: { isOpen, items },
            currencies: { currentCurrency },
            navigate,
        } = this.props;

        const convertedPrice =
            items.length &&
            items.map(item => convertPrice(item.prices, currentCurrency));

        return (
            <>
                <CartOverlayContainer isOpen={isOpen}>
                    <CartContainer>
                        {items.length > 0 ? (
                            <>
                                <CartHeader>
                                    {calculateItemsCount(items)}
                                </CartHeader>
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
                                <CartFooter>
                                    <TotalContainer>
                                        <h3>Total:</h3>
                                        <Price>
                                            <h3>
                                                {
                                                    convertedPrice[0]
                                                        .correctSymbol
                                                }{' '}
                                                {Math.round(
                                                    calculateTotalPrice(
                                                        items,
                                                        currentCurrency
                                                    ) * 100
                                                ) / 100}
                                            </h3>
                                        </Price>
                                    </TotalContainer>
                                    <ButtonsContainer>
                                        <CustomButton
                                            onClick={() => navigate('/cart')}
                                            inverted
                                        >
                                            View Bag
                                        </CustomButton>
                                        <CustomButton
                                            onClick={() => {
                                                alert('Checkout');
                                                navigate('/cart');
                                            }}
                                        >
                                            Checkout
                                        </CustomButton>
                                    </ButtonsContainer>
                                </CartFooter>
                            </>
                        ) : (
                            <h6>Cart is empty.</h6>
                        )}
                    </CartContainer>
                </CartOverlayContainer>
            </>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
    currencies: state.currencies,
});

export default withRouter(connect(mapStateToProps)(CartOverlay));

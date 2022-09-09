import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculateItemsCount } from '../../helpers/cart.helper';
import { convertMultipleItemsPrice } from '../../helpers/price.helper';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import TotalPrice from '../total-price/total-price.component';
import {
    CartContainer,
    SummaryContainer,
    QuantityContainer,
    QuantityLabel,
    QuantityValue,
    TotalContainer,
    TotalLabel,
    TotalPriceValue,
    OrderButtonContainer,
} from './cart.styles';

export class Cart extends Component {
    render() {
        const {
            cart: { items },
            currencies: { currentCurrency },
        } = this.props;

        const convertedPrice =
            items.length && convertMultipleItemsPrice(items, currentCurrency);

        const itemsCount = calculateItemsCount(items);

        return items.length > 0 ? (
            <CartContainer>
                {items.map((item, index) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        index={index}
                        convertedPrice={convertedPrice}
                    />
                ))}
                <SummaryContainer>
                    <QuantityContainer>
                        <QuantityLabel>Quantity: </QuantityLabel>
                        <QuantityValue>{itemsCount}</QuantityValue>
                    </QuantityContainer>
                    <TotalContainer>
                        <TotalLabel>Total: </TotalLabel>
                        <TotalPriceValue>
                            <TotalPrice
                                items={items}
                                currentCurrency={currentCurrency}
                                convertedPrice={convertedPrice}
                            />
                        </TotalPriceValue>
                    </TotalContainer>
                    <OrderButtonContainer>
                        <CustomButton
                            onClick={() => alert('Order!')}
                            disabled={true}
                        >
                            Order
                        </CustomButton>
                    </OrderButtonContainer>
                </SummaryContainer>
            </CartContainer>
        ) : (
            <h1>Cart is empty!</h1>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
    currencies: state.currencies,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

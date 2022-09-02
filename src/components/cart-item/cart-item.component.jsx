import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem } from '../../redux/cart/cart.reducer';

import Price from '../price/price.component';

import {
    CartItemContainer,
    CartItemDescriptionContainer,
    ItemName,
    PriceContainer,
    QuantityContainer,
    ImageContainer,
    Image,
} from './cart-item.styles';

class CartItem extends Component {
    render() {
        const { item, index, convertedPrice, addItem, removeItem } = this.props;

        return (
            <CartItemContainer>
                <CartItemDescriptionContainer>
                    <ItemName>{item.name}</ItemName>
                    <PriceContainer>
                        <Price>
                            {convertedPrice[index].correctSymbol}
                            {Math.round(
                                convertedPrice[index].correctPrice *
                                    item.quantity *
                                    100
                            ) / 100}
                        </Price>
                    </PriceContainer>
                </CartItemDescriptionContainer>
                <QuantityContainer>
                    <button
                        onClick={e => {
                            addItem(item);
                            e.stopPropagation();
                        }}
                    >
                        +
                    </button>
                    {item.quantity}
                    <button
                        onClick={e => {
                            removeItem(item);
                            e.stopPropagation();
                        }}
                    >
                        -
                    </button>
                </QuantityContainer>
                <ImageContainer>
                    <Image src={item.gallery[0]} alt={item.name} />
                </ImageContainer>
            </CartItemContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { roundNumber } from '../../helpers/price.helper';
import { addItem, removeItem } from '../../redux/cart/cart.reducer';
import QuantityButton from '../quantity-button/quantity-button.component';

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
                        {convertedPrice[index].correctSymbol}
                        {roundNumber(
                            convertedPrice[index].correctPrice * item.quantity
                        )}
                    </PriceContainer>
                </CartItemDescriptionContainer>
                <QuantityContainer>
                    <QuantityButton handleClick={addItem} item={item}>
                        +
                    </QuantityButton>
                    {item.quantity}
                    <QuantityButton handleClick={removeItem} item={item}>
                        -
                    </QuantityButton>
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

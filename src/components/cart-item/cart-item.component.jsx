import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem } from '../../redux/cart/cart.reducer';

import Price from '../price/price.component';

import { CartItemContainer } from './cart-item.styles';

class CartItem extends Component {
    render() {
        const { item, index, convertedPrice, addItem, removeItem } = this.props;

        return (
            <CartItemContainer>
                <div className="itemName">{item.name}</div>
                <div className="quantityContainer">
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
                </div>
                <Price>
                    {convertedPrice[index].correctSymbol}{' '}
                    {Math.round(
                        convertedPrice[index].correctPrice * item.quantity * 100
                    ) / 100}
                </Price>
            </CartItemContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);

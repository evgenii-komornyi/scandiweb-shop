import React, { Component } from 'react';
import { calculateTotalPrice } from '../../helpers/cart.helper';
import { roundNumber } from '../../helpers/price.helper';

class TotalPrice extends Component {
    render() {
        const { items, currentCurrency, convertedPrice } = this.props;

        return (
            <>
                {convertedPrice[0].correctSymbol}
                {roundNumber(
                    calculateTotalPrice(items, currentCurrency)
                ).toFixed(2)}
            </>
        );
    }
}

export default TotalPrice;

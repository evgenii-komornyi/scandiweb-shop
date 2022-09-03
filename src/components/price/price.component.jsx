import React, { Component } from 'react';
import { connect } from 'react-redux';

import { convertPrice } from '../../helpers/price.helper';

export class Price extends Component {
    render() {
        const {
            prices,
            currencies: { currentCurrency },
        } = this.props;

        const convertedPrice = convertPrice(prices, currentCurrency);

        return (
            <>
                {convertedPrice.correctSymbol}
                {convertedPrice.correctPrice}
            </>
        );
    }
}

const mapStateToProps = state => ({
    currencies: state.currencies,
});

export default connect(mapStateToProps)(Price);

import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Price extends Component {
    render() {
        const {
            prices,
            currencies: { currentCurrency },
        } = this.props;

        const convertedPrice = prices.find(
            price => price.currency.label === currentCurrency
        );

        return (
            <>
                {convertedPrice.amount} {convertedPrice.currency.symbol}
            </>
        );
    }
}

const mapStateToProps = state => ({
    currencies: state.currencies,
});

export default connect(mapStateToProps)(Price);

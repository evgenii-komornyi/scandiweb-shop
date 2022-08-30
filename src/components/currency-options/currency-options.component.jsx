import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    fetchCurrencies,
    changeCurrentCurrency,
} from '../../redux/currencies/currencies.reducer';

import { Select, Option } from './currency-options.styles';

export class CurrencyOptions extends Component {
    componentDidMount() {
        this.props.fetchCurrencies();
    }

    onCurrencyChange = e => {
        this.props.changeCurrentCurrency(e.target.value);
    };

    render() {
        const { currencies } = this.props.currencies;

        return (
            <Select name="currency" onChange={this.onCurrencyChange}>
                {currencies.map(currency => (
                    <Option value={currency.label} key={currency.label}>
                        {currency.symbol} {currency.label}
                    </Option>
                ))}
            </Select>
        );
    }
}

const mapStateToProps = state => ({
    currencies: state.currencies,
});

const mapDispatchToProps = dispatch => ({
    fetchCurrencies: () => dispatch(fetchCurrencies()),
    changeCurrentCurrency: currentCurrency =>
        dispatch(changeCurrentCurrency(currentCurrency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyOptions);

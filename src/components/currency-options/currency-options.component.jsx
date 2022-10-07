import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    changeCurrentCurrency,
    setIsCurrenciesOpen,
    setActiveIndex,
} from '../../redux/currencies/currencies.reducer';

import {
    CurrencySwitcherContainer,
    CurrencyLabel,
    ArrowContainer,
    CurrenciesOverlay,
    CurrencyOption,
} from './currency-options.styles';

import ArrowUp from '../../img/arrow_up.png';

export class CurrencyOptions extends Component {
    constructor() {
        super();
        this.wrapperRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = event => {
        if (
            this.wrapperRef &&
            !this.wrapperRef.current.contains(event.target)
        ) {
            this.props.setIsCurrenciesOpen(false);
        }
    };

    onCurrencyChange = (e, index) => {
        const { changeCurrentCurrency, setActiveIndex } = this.props;
        const splitted = e.target.innerText.split(' ');

        changeCurrentCurrency(splitted[1]);

        setActiveIndex(index);
    };

    changeActiveIndex = index => {
        this.props.setActiveIndex(index);
    };

    render() {
        const {
            currencies: { currencies, currentCurrency, isOpen, activeIndex },
            setIsCurrenciesOpen,
        } = this.props;

        const chosenCurrency = currencies.find(
            currency => currency.label === currentCurrency
        );

        return (
            <>
                <CurrencySwitcherContainer
                    onClick={() => setIsCurrenciesOpen(true)}
                >
                    <CurrencyLabel>
                        {chosenCurrency && chosenCurrency.symbol}
                    </CurrencyLabel>
                    <ArrowContainer image={ArrowUp} isOpen={isOpen} />
                </CurrencySwitcherContainer>
                <CurrenciesOverlay
                    ref={this.wrapperRef}
                    isOpen={isOpen}
                    onClick={e => e.stopPropagation()}
                >
                    {currencies.map((currency, index) => (
                        <CurrencyOption
                            key={index}
                            className={`${
                                activeIndex === index ? 'active' : null
                            } `}
                            onClick={e => this.onCurrencyChange(e, index)}
                        >
                            {currency.symbol} {currency.label}
                        </CurrencyOption>
                    ))}
                </CurrenciesOverlay>
            </>
        );
    }
}

const mapStateToProps = state => ({
    currencies: state.currencies,
});

const mapDispatchToProps = dispatch => ({
    changeCurrentCurrency: currentCurrency =>
        dispatch(changeCurrentCurrency(currentCurrency)),
    setIsCurrenciesOpen: isOpen => dispatch(setIsCurrenciesOpen(isOpen)),
    setActiveIndex: index => dispatch(setActiveIndex(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyOptions);

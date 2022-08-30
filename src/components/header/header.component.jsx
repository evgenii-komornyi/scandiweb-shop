import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import CartButton from '../cart-button/cart-button.component';
import CurrencyOptions from '../currency-options/currency-options.component';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    CartCurrencyContainer,
} from './header.styles';

import Logo from '../../img/logo.png';

class Header extends Component {
    render() {
        const { categories, isLoaded } = this.props.categories;
        return (
            <HeaderContainer>
                <OptionsContainer>
                    {isLoaded &&
                        categories.map(category => (
                            <NavLink
                                key={category.name}
                                to={`${category.name}`}
                                className={navData =>
                                    navData.isActive ? 'current' : ''
                                }
                            >
                                <li>{category.name}</li>
                            </NavLink>
                        ))}
                </OptionsContainer>
                <LogoContainer to="/">
                    <img src={Logo} alt="logo" />
                </LogoContainer>
                <CartCurrencyContainer>
                    <CurrencyOptions />
                    <CartButton />
                </CartCurrencyContainer>
            </HeaderContainer>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
});

export default connect(mapStateToProps)(Header);

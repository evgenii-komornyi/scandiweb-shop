import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';

import { addItem } from '../../redux/cart/cart.reducer';

import { withRouter } from '../../utils/withRouter';

import { AddToCartButton } from '../add-to-cart-button/add-to-cart-button.component';
import Price from '../price/price.component';

import { convertPrice } from '../../helpers/price.helper';

import {
    ProductItemContainer,
    BackgroundImage,
    ProductFooterContainer,
    NameContainer,
    PriceContainer,
} from './product-item.styles';

class ProductItem extends Component {
    render() {
        const {
            product: { id, gallery, name, prices, attributes },
            navigate,
            category,
            isMainPage = false,
            addItem,
            currencies: { currentCurrency },
        } = this.props;

        const convertedPrice = convertPrice(prices, currentCurrency);

        return (
            <ProductItemContainer
                onClick={() =>
                    navigate(`${isMainPage ? `${category}/${id}` : `${id}`}`)
                }
            >
                <BackgroundImage className="image" imageUrl={gallery[0]} />
                <ProductFooterContainer>
                    <NameContainer>{name}</NameContainer>
                    <PriceContainer>
                        <Price>
                            {convertedPrice.correctSymbol}{' '}
                            {convertedPrice.correctPrice}
                        </Price>
                    </PriceContainer>
                </ProductFooterContainer>
                {attributes.length === 0 && (
                    <AddToCartButton
                        product={{
                            id,
                            name,
                            prices,
                            gallery,
                            attributes,
                            correctPrice: convertedPrice.correctPrice,
                        }}
                        handleAddItemToCart={addItem}
                    />
                )}
            </ProductItemContainer>
        );
    }
}

const mapStateToProps = state => ({
    currencies: state.currencies,
});

const mapDispatchToProps = dispatch => ({
    addItem: product => dispatch(addItem(product)),
});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProductItem);

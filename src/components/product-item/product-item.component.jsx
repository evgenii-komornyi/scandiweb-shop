import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';

import { addItem } from '../../redux/cart/cart.reducer';

import { withRouter } from '../../utils/withRouter';

import Price from '../price/price.component';
import { AddToCartButton } from '../add-to-cart-button/add-to-cart-button.component';

import {
    ProductItemContainer,
    BackgroundImage,
    ProductFooterContainer,
    NameContainer,
    PriceContainer,
    BackgroundImageContainer,
    OutOfStockContainer,
} from './product-item.styles';

class ProductItem extends Component {
    render() {
        const {
            product: { id, gallery, name, brand, prices, inStock, attributes },
            navigate,
            category,
            isMainPage = false,
            addItem,
        } = this.props;

        return (
            <ProductItemContainer
                onClick={() =>
                    navigate(`${isMainPage ? `${category}/${id}` : `${id}`}`)
                }
            >
                {!inStock && (
                    <OutOfStockContainer>
                        <h1>Out of stock</h1>
                    </OutOfStockContainer>
                )}
                <BackgroundImageContainer>
                    <BackgroundImage
                        className="image"
                        src={gallery[0]}
                        alt={name}
                    />
                </BackgroundImageContainer>
                <ProductFooterContainer>
                    <NameContainer>
                        {name} {brand}
                    </NameContainer>
                    <PriceContainer>
                        <Price prices={prices} />
                    </PriceContainer>
                </ProductFooterContainer>
                {attributes.length === 0 && inStock && (
                    <AddToCartButton
                        product={{
                            id,
                            name,
                            prices,
                            gallery,
                            attributes,
                        }}
                        handleAddItemToCart={addItem}
                    />
                )}
            </ProductItemContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addItem: product => dispatch(addItem(product)),
});

export default compose(
    withRouter,
    connect(null, mapDispatchToProps)
)(ProductItem);

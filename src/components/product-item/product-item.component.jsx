import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';

import { addItem } from '../../redux/cart/cart.reducer';

import { withRouter } from '../../utils/withRouter';

import { AddToCartButton } from '../add-to-cart-button/add-to-cart-button.component';
import Price from '../price/price.component';

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
        } = this.props;

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
                        <Price prices={prices} />
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

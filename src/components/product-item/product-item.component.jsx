import React, { Component } from 'react';

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
        } = this.props;

        return (
            <ProductItemContainer onClick={() => navigate(`${category}/${id}`)}>
                <BackgroundImage className="image" imageUrl={gallery[0]} />
                <ProductFooterContainer>
                    <NameContainer>{name}</NameContainer>
                    <PriceContainer>
                        <Price prices={prices} />
                    </PriceContainer>
                </ProductFooterContainer>
                {attributes.length > 0 && <AddToCartButton />}
            </ProductItemContainer>
        );
    }
}

export default withRouter(ProductItem);

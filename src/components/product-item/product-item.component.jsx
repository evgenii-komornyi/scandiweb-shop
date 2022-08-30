import React, { Component } from 'react';

import { withRouter } from '../../utils/withRouter';

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
            product: { id, gallery, name, prices },
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
            </ProductItemContainer>
        );
    }
}

export default withRouter(ProductItem);

import React, { Component } from 'react';
import ProductDetails from '../../components/product/product-details.component';
import { Container } from '../../styles/common.styles';

class ProductPage extends Component {
    render() {
        return (
            <Container>
                <ProductDetails />;
            </Container>
        );
    }
}

export default ProductPage;

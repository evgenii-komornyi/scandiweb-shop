import React, { Component } from 'react';
import ProductsList from '../../components/products/products-list.component';
import { Container } from '../../styles/common.styles';

class MainPage extends Component {
    render() {
        return (
            <Container>
                <ProductsList />
            </Container>
        );
    }
}

export default MainPage;

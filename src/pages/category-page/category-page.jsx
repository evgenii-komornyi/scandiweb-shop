import React, { Component } from 'react';
import CategoryDetails from '../../components/category/category-details.component';
import { Container } from '../../styles/common.styles';

class CategoryPage extends Component {
    render() {
        return (
            <Container>
                <CategoryDetails />
            </Container>
        );
    }
}

export default CategoryPage;

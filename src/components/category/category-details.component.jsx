import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';

import { withRouter } from '../../utils/withRouter';
import { fetchCategoryByName } from '../../redux/categories/category.reducer';

class CategoryDetails extends Component {
    componentDidMount() {
        this.props.fetchCategoryByName(this.props.params.category);
    }

    componentDidUpdate(prevProps) {
        if (this.props.params.category !== prevProps.params.category) {
            this.props.fetchCategoryByName(this.props.params.category);
        }
    }

    render() {
        const { category, isLoaded } = this.props.category;

        return (
            <>
                {isLoaded ? (
                    <>
                        <h1>{category.name}</h1>
                        <ul>
                            {category.products.map(product => (
                                <li key={product.id}>{product.name}</li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <h1>Loading...</h1>
                )}
            </>
        );
    }
}

const mapStateToProps = state => ({ category: state.category });

const mapDispatchToProps = dispatch => ({
    fetchCategoryByName: category => dispatch(fetchCategoryByName(category)),
});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(CategoryDetails);

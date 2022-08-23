import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCategories } from './redux/categories/categories.reducer';

import Header from './components/header/header.component';

export class App extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        return (
            <>
                <Header />
                <div>App</div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

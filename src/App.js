import React, { Component } from 'react';
import { connect } from 'react-redux';

export class App extends Component {
    render() {
        return <div>App</div>;
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);

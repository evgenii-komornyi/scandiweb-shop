import React, { Component } from 'react';

export class Price extends Component {
    render() {
        const { children } = this.props;

        return <>{children}</>;
    }
}

export default Price;

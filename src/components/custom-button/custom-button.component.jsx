import React, { Component } from 'react';

import { Button } from './custom-button.styles';

class CustomButton extends Component {
    render() {
        const { children, ...rest } = this.props;

        return (
            <>
                <Button {...rest}>{children}</Button>
            </>
        );
    }
}

export default CustomButton;

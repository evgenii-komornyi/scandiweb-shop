import React, { Component } from 'react';

import { Button } from './custom-button.styles';

class CustomButton extends Component {
    clickHandler = () => {
        const { product, onClick } = this.props;

        if (product) {
            onClick(product);
        } else {
            onClick();
        }
    };

    render() {
        const { children, inverted, disabled } = this.props;

        return (
            <>
                <Button
                    onClick={this.clickHandler}
                    disabled={!disabled}
                    inverted={inverted}
                    title={!disabled ? 'Choose attributes!' : null}
                >
                    {children}
                </Button>
            </>
        );
    }
}

export default CustomButton;

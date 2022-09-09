import React, { Component } from 'react';
import { Button } from './quantity-button.styles';

class QuantityButton extends Component {
    render() {
        const { handleClick, children, item, isOverlay = false } = this.props;

        const onClickHandler = e => {
            handleClick(item);
            e.stopPropagation();
        };

        return (
            <Button isOverlay={isOverlay} onClick={onClickHandler}>
                {children}
            </Button>
        );
    }
}

export default QuantityButton;

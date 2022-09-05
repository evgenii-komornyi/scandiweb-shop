import React, { Component } from 'react';

class QuantityButton extends Component {
    render() {
        const { handleClick, children, item } = this.props;

        const onClickHandler = (e, item) => {
            handleClick(item);
            e.stopPropagation();
        };

        return (
            <button onClick={e => onClickHandler(e, item)}>{children}</button>
        );
    }
}

export default QuantityButton;

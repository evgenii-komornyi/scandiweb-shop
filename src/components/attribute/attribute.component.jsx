import React, { Component } from 'react';

import { SelectedAttribute, AttributeItem, Label } from './attribute.styles';

class Attribute extends Component {
    constructor() {
        super();

        this.state = {
            activeItem: null,
        };
    }

    onChangeHandler = (e, currentItemId) => {
        const { name, value } = e.target.dataset;

        this.setState({ activeItem: currentItemId });

        this.props.onChange(name, value);
    };

    render() {
        const { attribute } = this.props;

        return attribute.items.map((item, index) => (
            <SelectedAttribute key={item.id} incomingType={attribute.type}>
                <AttributeItem
                    className={`${
                        this.state.activeItem === item.id ? 'active' : ''
                    } attrButton`}
                    id={`${attribute.id}_${item.value}_${index}`}
                />
                <Label
                    data-name={attribute.name}
                    data-value={item.value}
                    onClick={e => this.onChangeHandler(e, item.id)}
                    incomingType={attribute.type}
                    className={
                        attribute.type === 'swatch'
                            ? 'coloredLabel'
                            : 'attrLabel'
                    }
                    htmlFor={`${attribute.id}_${item.value}_${index}`}
                    itemValue={item.value}
                >
                    {attribute.type === 'text' && item.value}
                </Label>
                <div
                    className={`border ${
                        this.state.activeItem === item.id ? 'active' : ''
                    }`}
                />
            </SelectedAttribute>
        ));
    }
}

export default Attribute;

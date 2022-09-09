import React, { Component } from 'react';

import { AttributeItem, Label } from './attribute.styles';

class Attribute extends Component {
    onChangeHandler = e => {
        const { name, value } = e.target;

        this.props.onChange(name, value);
    };

    render() {
        const { attribute } = this.props;

        return attribute.items.map((item, index) => (
            <div key={item.id}>
                <AttributeItem
                    onChange={this.onChangeHandler}
                    className="attrButton"
                    id={`${attribute.id}_${item.value}_${index}`}
                    type="radio"
                    name={attribute.name}
                    value={item.value}
                />
                <Label
                    incomingType={attribute.type}
                    className={
                        attribute.type === 'swatch'
                            ? 'coloredLabel'
                            : 'attrLabel'
                    }
                    htmlFor={`${attribute.id}_${item.value}_${index}`}
                    style={{
                        backgroundColor:
                            attribute.type === 'swatch' && `${item.value}`,
                    }}
                >
                    {attribute.type === 'text' && item.value}
                </Label>
            </div>
        ));
    }
}

export default Attribute;

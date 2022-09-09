import React, { Component } from 'react';
import Attribute from '../attribute/attribute.component';

import {
    AttributesContainer,
    AttributeItemContainer,
    AttributeName,
} from './attributes.styles';

class Attributes extends Component {
    render() {
        const { attributes, onChange } = this.props;

        return (
            <AttributesContainer>
                {attributes.map(attribute => (
                    <div key={attribute.id}>
                        <AttributeName>{attribute.name}</AttributeName>
                        <AttributeItemContainer>
                            <Attribute
                                attribute={attribute}
                                onChange={onChange}
                            />
                        </AttributeItemContainer>
                    </div>
                ))}
            </AttributesContainer>
        );
    }
}

export default Attributes;

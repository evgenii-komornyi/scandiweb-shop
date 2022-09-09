import React, { Component } from 'react';
import { connect } from 'react-redux';
import { roundNumber } from '../../helpers/price.helper';
import { addItem, removeItem } from '../../redux/cart/cart.reducer';
import Carousel from '../carousel/carousel.component';
import QuantityButton from '../quantity-button/quantity-button.component';

import {
    CartItemContainer,
    CartItemDescriptionContainer,
    ItemName,
    ItemBrand,
    PriceContainer,
    AttributesContainer,
    AttributeItemContainer,
    AttributeName,
    AttributeItem,
    QuantityContainer,
    ImageContainer,
} from './cart-item.styles';

class CartItem extends Component {
    render() {
        const {
            item,
            index,
            convertedPrice,
            addItem,
            removeItem,
            isOverlay = false,
        } = this.props;

        const findSelectedAttribute = attribute =>
            item.selectedAttributes.find(
                selectedAttribute => selectedAttribute.name === attribute.id
            );

        return (
            <CartItemContainer>
                <CartItemDescriptionContainer isOverlay={isOverlay}>
                    <ItemName isOverlay={isOverlay}>{item.name}</ItemName>
                    <ItemBrand isOverlay={isOverlay}>{item.brand}</ItemBrand>
                    <PriceContainer isOverlay={isOverlay}>
                        {convertedPrice[index].correctSymbol}
                        {roundNumber(
                            convertedPrice[index].correctPrice * item.quantity
                        )}
                    </PriceContainer>
                    <AttributesContainer>
                        {item.attributes.map((attribute, index) => (
                            <div key={attribute.id}>
                                <AttributeName isOverlay={isOverlay}>
                                    {attribute.name}
                                </AttributeName>
                                <AttributeItemContainer key={index}>
                                    {attribute.items.map(
                                        (attributeItem, index) => (
                                            <AttributeItem
                                                key={index}
                                                incomingType={attribute.type}
                                                className={
                                                    findSelectedAttribute(
                                                        attribute
                                                    ).value ===
                                                    attributeItem.value
                                                        ? 'active'
                                                        : null
                                                }
                                                style={{
                                                    backgroundColor: `${
                                                        attribute.type ===
                                                        'swatch'
                                                            ? attributeItem.value
                                                            : ''
                                                    }`,
                                                }}
                                                isOverlay={isOverlay}
                                            >
                                                {' '}
                                                {attribute.type === 'text' &&
                                                    attributeItem.value}
                                            </AttributeItem>
                                        )
                                    )}
                                </AttributeItemContainer>
                            </div>
                        ))}
                    </AttributesContainer>
                </CartItemDescriptionContainer>
                <QuantityContainer isOverlay={isOverlay}>
                    <QuantityButton
                        handleClick={addItem}
                        item={item}
                        isOverlay={isOverlay}
                    >
                        +
                    </QuantityButton>
                    {item.quantity}
                    <QuantityButton
                        handleClick={removeItem}
                        item={item}
                        isOverlay={isOverlay}
                    >
                        -
                    </QuantityButton>
                </QuantityContainer>
                <ImageContainer isOverlay={isOverlay}>
                    <Carousel
                        images={item.gallery}
                        alt={item.name}
                        isOverlay={isOverlay}
                    />
                </ImageContainer>
            </CartItemContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);

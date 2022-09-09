import styled, { css } from 'styled-components';

const getSwatchStyle = css`
    width: 10px;
    height: 10px;
    opacity: 0.2;

    &.active {
        opacity: 1;
        border: 1px solid #75c43c;
    }
`;

const getTextStyle = css`
    width: auto;
    height: 15px;

    &.active {
        background-color: #1d1f22;
        color: #fff;
    }
`;

const checkType = props =>
    props.incomingType === 'swatch' ? getSwatchStyle : getTextStyle;

export const CartItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
    padding: 10px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const checkPropsPrice = props =>
    props.isOverlay
        ? css`
              font-size: 16px;
              font-weight: normal;
          `
        : css`
              font-size: 30px;
              font-weight: 700;
          `;

export const PriceContainer = styled.div`
    ${checkPropsPrice}
    margin: 10px 0;
`;

const checkPropsItemName = props =>
    props.isOverlay
        ? css`
              font-size: 16px;
              font-weight: normal;
              width: 90px;
          `
        : css`
              font-size: 30px;
              font-weight: 700;
              width: 100%;
          `;

export const ItemName = styled.div`
    ${checkPropsItemName}
    margin-bottom: 10px;
`;

const checkPropsItemBrand = props =>
    props.isOverlay
        ? css`
              font-size: 16px;
              font-weight: normal;
              width: 90px;
          `
        : css`
              font-size: 30px;
              width: 100%;
          `;

export const ItemBrand = styled.div`
    ${checkPropsItemBrand}
    margin-bottom: 5px;
`;

export const CartItemDescriptionContainer = styled.div`
    width: ${props => (props.isOverlay ? 'auto' : '201px')};
`;

export const AttributesContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AttributeItemContainer = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const checkPropsAttrName = props =>
    props.isOverlay
        ? css`
              font-size: 15px;
              font-weight: normal;
          `
        : css`
              font-size: 18px;
              text-transform: uppercase;
          `;

export const AttributeName = styled.h5`
    ${checkPropsAttrName}
    margin: 5px 0 0 0;
`;

const checkPopsAttrItem = props =>
    props.isOverlay
        ? css`
              font-size: 10px;
              margin: 4px 4px 10px 0;
              padding: 5px;
          `
        : css`
              font-size: 16px;
              margin: 4px 4px 10px 0;
              padding: 10px;
          `;

export const AttributeItem = styled.div`
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid black;

    ${checkPopsAttrItem}
    ${checkType}
`;

export const QuantityContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    ${props =>
        !props.isOverlay &&
        css`
            position: relative;
            left: 250px;
        `}
`;

const checkPropsImgContainer = props =>
    props.isOverlay
        ? css`
              width: 100px;
              height: 100px;
              padding: 10px 0;
          `
        : css`
              width: 250px;
              height: auto;
              padding: 20px;
          `;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    ${checkPropsImgContainer}
`;

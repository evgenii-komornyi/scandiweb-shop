import styled, { css } from 'styled-components';

const getSwatchStyle = css`
    width: 40px;
    height: 40px;
    opacity: 0.5;
    border: 1px solid #75c43c;
`;

const getTextStyle = css`
    width: 50px;
    height: 40px;
    border: 1px solid black;
`;

const checkType = props =>
    props.incomingType === 'swatch' ? getSwatchStyle : getTextStyle;

export const AttributeItem = styled.input`
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px 4px 20px 0;

    &.attrButton {
        display: none;
    }

    &.attrButton:checked + .attrLabel {
        background-color: #1d1f22;
        color: #ffffff;
    }

    &.attrButton:checked + .coloredLabel {
        opacity: 1;
    }
`;

export const Label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #a6a6a6;
    margin: 10px 10px 10px 0;
    cursor: pointer;

    ${checkType}
`;

import styled, { css } from 'styled-components';

const getSwatchStyle = css`
    width: 40px;
    height: 40px;
    position: relative;
    z-index: 2;
`;

const getTextStyle = css`
    width: 50px;
    height: 40px;
    border: 1px solid black;
`;

const checkType = props =>
    props.incomingType === 'swatch' ? getSwatchStyle : getTextStyle;

export const AttributeItem = styled.div`
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px 4px 20px 0;

    &.attrButton {
        display: none;
    }

    &.attrButton.active + .attrLabel {
        background-color: #1d1f22;
        color: #ffffff;
    }
`;

const addActiveClassToSelectedAttribute = props =>
    props.incomingType === 'swatch' &&
    css`
        & > .border.active {
            width: 45.5px;
            height: 45.5px;
            border: 1px solid #5ece7b;
            position: absolute;
            top: 7px;
            right: 7.5px;
        }
    `;

export const SelectedAttribute = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: ${props => (props.incomingType === 'swatch' ? 'relative' : null)};
    ${addActiveClassToSelectedAttribute};
`;

export const Label = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 10px 10px 10px 0;
    cursor: pointer;
    background-color: ${({ itemValue, incomingType }) =>
        incomingType === 'swatch' && itemValue};

    ${checkType};
`;

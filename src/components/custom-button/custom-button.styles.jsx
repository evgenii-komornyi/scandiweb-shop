import styled, { css } from 'styled-components';

const buttonStyles = css`
    background-color: #5ece7b;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }

    &:disabled {
        background-color: #fff;
        color: #888;
        border: 1px solid #888;
        cursor: not-allowed;
    }
`;

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;

const getButtonStyles = props =>
    props.inverted ? invertedButtonStyles : buttonStyles;

export const Button = styled.button`
    min-width: 130px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px;
    font-size: 12px;
    text-transform: uppercase;
    cursor: pointer;

    ${getButtonStyles}
`;

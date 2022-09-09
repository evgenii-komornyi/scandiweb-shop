import styled, { css } from 'styled-components';

const inOverlayStyle = css`
    width: 20px;
    height: 20px;
    padding: 2px;
`;
const inCartStyle = css`
    width: 45px;
    height: 45px;
    padding: 5px;
`;

const checkDestination = props =>
    props.isOverlay ? inOverlayStyle : inCartStyle;

export const Button = styled.button`
    background: #fff;
    color: #1d1f22 !important;
    margin: 0 0;
    border: 1px solid #1d1f22 !important;
    text-align: center;
    ${checkDestination}

    &:hover {
        background: #1d1f22;
        color: #fff !important;
        cursor: pointer;
    }
`;

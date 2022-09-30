import styled from 'styled-components';

export const CurrencySwitcherContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    right: 20px;
`;

export const CurrencyLabel = styled.span`
    margin-right: 10px;
    text-align: center;
    width: 20px;
`;

export const ArrowContainer = styled.div`
    background-image: url(${props => props.image});
    width: 10px;
    height: 10px;
    margin-top: 1px;
    background-repeat: no-repeat;
    background-size: contain;
    transform: rotate(${props => (props.isOpen ? '180deg' : 0)});
`;

export const CurrenciesOverlay = styled.ul`
    list-style: none;
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    width: 100px;
    height: auto;
    border: none;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 9999;
    top: 60px;
    right: 250px;
    display: ${props => (props.isOpen ? 'block' : 'none')};
    text-align: center;
    cursor: pointer;
    padding-inline-start: 0;
`;

export const CurrencyOption = styled.li`
    margin: 0;
    padding: 10px;

    &:hover {
        background-color: #eeeeee;
    }

    &.active {
        background-color: #eeeeee;
    }
`;

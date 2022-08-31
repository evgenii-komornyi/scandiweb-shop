import styled from 'styled-components';

export const CartOverlayContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    display: ${props => (props.isOpen ? 'block' : 'none')};
`;

export const MiniCartContainer = styled.div`
    width: 300px;
    height: 50vh;
    background-color: #fff;
    position: relative;
    top: 76px;
    left: 70%;
    padding: 20px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    align-items: flex-start;
`;

export const MiniCartItem = styled.div`
    padding: 5px 5px;
    margin: 5px;
`;

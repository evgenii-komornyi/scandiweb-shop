import styled from 'styled-components';

export const CartOverlayContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    z-index: 9998;
    top: 75px;
    cursor: default;
    left: 0;
    display: ${props => (props.isOpen ? 'block' : 'none')};
`;

export const CartContainer = styled.div`
    width: 325px;
    height: 50vh;
    background-color: #fff;
    position: relative;
    left: 70%;
    padding: 20px 0 20px 20px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
`;

export const CartHeader = styled.div`
    font-size: 12px;
    font-weight: bold;
`;

export const ItemsContainer = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 0 10px;

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-thumb {
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        border-radius: 9999px;
        background-color: #aaaaaa;
    }
`;

export const CartFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding-right: 20px;
`;

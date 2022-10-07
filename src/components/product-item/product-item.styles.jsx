import styled from 'styled-components';

export const ProductItemContainer = styled.div`
    width: 33.333vw;
    height: 350px;
    display: flex;
    padding: 20px 20px 50px;
    flex-direction: column;
    align-items: center;
    position: relative;
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 35px rgba(66, 67, 69, 0.2);
    }
`;

export const OutOfStockContainer = styled.div`
    width: 100%;
    height: 420px;
    background: rgba(255, 255, 255, 0.5);
    color: #8d8f9a;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;

    & > h1 {
        font-weight: 300;
    }
`;

export const BackgroundImageContainer = styled.div`
    width: 300px;
    height: 300px;
    text-align: center;
`;

export const BackgroundImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    margin-bottom: 5px;
`;

export const ProductFooterContainer = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 18px;
`;

export const NameContainer = styled.span`
    font-weight: 300;
    margin-top: 10px;
    margin-bottom: 15px;
    padding-left: 40px;
`;

export const PriceContainer = styled.span`
    color: '#222';
    font-weight: 700;
    padding-left: 40px;
`;

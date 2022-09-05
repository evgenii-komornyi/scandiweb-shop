import styled from 'styled-components';

export const CartItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    padding: 10px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const PriceContainer = styled.div`
    font-weight: bold;
    font-size: 12px;
`;

export const ItemName = styled.div`
    font-size: 14px;
    width: 80px;
    margin-bottom: 5px;
`;

export const CartItemDescriptionContainer = styled.div``;

export const QuantityContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: -50px;
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80px;
    height: 80px;
`;

export const Image = styled.img`
    width: 100%;
`;

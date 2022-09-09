import styled from 'styled-components';

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    left: 170px;
    position: relative;

    h3 {
        font-size: 24px;
    }
`;

export const QuantityContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const QuantityLabel = styled.h3`
    font-weight: 400;
    margin: 10px 0 0 0;
`;

export const QuantityValue = styled.h3`
    padding: 0 10px;
    margin: 10px 0 0 0;
`;

export const TotalContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const TotalLabel = styled.h3`
    font-weight: 500;
`;

export const TotalPriceValue = styled.h3`
    padding: 0 10px;
`;

export const OrderButtonContainer = styled.div`
    width: 279px;

    button {
        width: 100%;
    }
`;

import styled from 'styled-components';

export const AddToCartButtonContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: #56e180;
    border-radius: 50%;
    cursor: pointer;
    bottom: 85px;
    right: 80px;

    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
`;

export const CartImage = styled.img`
    width: 20px;
`;

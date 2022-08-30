import styled from 'styled-components';

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CategoryTitle = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const CategoryItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    & > div {
        flex: 1 1 25%;
        margin: 10px;
        margin-bottom: 30px;
    }
`;

CategoryItemsContainer.displayName = 'CategoryItemsContainer';

import styled from 'styled-components';

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CategoryTitle = styled.h2`
    font-size: 38px;
    margin-bottom: 30px;
    text-indent: 40px;

    &::first-letter {
        text-transform: uppercase;
    }
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

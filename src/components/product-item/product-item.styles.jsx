import styled from 'styled-components';

export const ProductItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover {
        .image {
            opacity: 0.8;
        }

        button {
            opacity: 0.85;
            display: flex;
        }
    }
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

BackgroundImage.displayName = 'BackgroundImage';

export const ProductFooterContainer = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 18px;
`;

ProductFooterContainer.displayName = 'CollectionFooterContainer';

export const NameContainer = styled.span`
    margin-bottom: 15px;
`;

NameContainer.displayName = 'NameContainer';

export const PriceContainer = styled.span`
    color: '#222';
`;

PriceContainer.displayName = 'PriceContainer';

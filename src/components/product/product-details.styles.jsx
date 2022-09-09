import styled from 'styled-components';

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const GalleryContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

export const ThumbnailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 70px;
    padding-right: 50px;
`;

export const ThumbnailCanvas = styled.div`
    background: #fff;
    margin: 5px;
    padding: 1px;
`;

export const Thumbnail = styled.div`
    width: 100%;
    height: 70px;
    background-image: ${({ image }) => `url(${image})`};
    background-position: center;
    background-size: cover;
`;

export const MainImageContainer = styled.div`
    display: flex;
    align-items: center;
    width: 500px;
    padding: 10px;

    img {
        width: 100%;
    }
`;

export const ProductDescriptionContainer = styled.div`
    color: #1d1f22;
`;

export const Description = styled.div`
    padding: 20px 0;
`;

export const AttributesContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PriceLabel = styled.h3`
    text-transform: uppercase;
    font-size: 16px;
    margin: 20px 0 10px 0;
`;

export const PriceValue = styled.h3`
    font-size: 24px;
    margin-top: 0;
    font-weight: 900;
`;

export const NameContainer = styled.h1`
    font-weight: 600;
    font-size: 30px;
`;

export const BrandContainer = styled.h2`
    font-weight: 400;
    font-size: 30px;
    margin-top: -10px;
`;

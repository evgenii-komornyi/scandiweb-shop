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
    position: relative;
    height: 100%;
`;

export const OutOfStockContainer = styled.div`
    width: 100%;
    height: 100%;
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

export const Thumbnail = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

export const MainImageContainer = styled.div`
    display: flex;
    width: 500px;
    padding: 5px 0;
    margin-left: 50px;

    img {
        max-width: 90%;
        max-height: 90%;
    }
`;

export const ProductDescriptionContainer = styled.div`
    width: 300px;
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

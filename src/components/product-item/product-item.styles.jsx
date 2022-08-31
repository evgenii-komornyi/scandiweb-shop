import styled from 'styled-components';

export const ProductItemContainer = styled.div`
    width: 33.333vw;
    display: flex;
    padding: 20px 20px 50px;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

        .image {
            opacity: 0.8;
            box-shadow: none;
        }

        button {
            opacity: 0.85;
            display: flex;
        }
    }
`;

export const BackgroundImage = styled.div`
    width: 80%;
    height: 100%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
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

import styled, { css } from 'styled-components';

export const CarouselContainer = styled.div`
    width: 100%;
`;

const checkImgContainerProps = props =>
    props.isOverlay
        ? css`
              width: 115px;
              margin-top: 80px;
          `
        : css`
              width: 250px;
              margin-top: 20px;
          `;

export const ImageContainer = styled.div`
    ${checkImgContainerProps}

    img {
        width: 100%;
    }
`;
const checkButtonContainerProps = props =>
    props.isOverlay
        ? css`
              left: 68px;
              bottom: 28px;
              width: 55px;

              button {
                  width: 20px;
                  height: 20px;
                  margin-right: 4px;

                  img {
                      width: 80%;
                  }
              }
          `
        : css`
              left: 178px;
              bottom: 38px;
              width: 90px;

              button {
                  width: 30px;
                  height: 30px;
                  margin-right: 4px;

                  img {
                      width: 50%;
                  }
              }
          `;

export const ButtonContainer = styled.div`
    position: relative;
    height: 15px;
    ${checkButtonContainerProps};

    button {
        background-color: rgba(0, 0, 0, 0.5);
        border: none;

        &:hover {
            border: 1px solid #000;
            background-color: #fff;
            cursor: pointer;
        }
    }
`;

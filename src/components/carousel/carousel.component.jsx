import React, { Component } from 'react';

import ArrowLeft from '../../img/arrow_left.png';
import ArrowRight from '../../img/arrow_right.png';
import {
    ButtonContainer,
    CarouselContainer,
    ImageContainer,
} from './carousel.styles';

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
        };
        this.imagesLength = props.images.length;
    }

    prevSlide = e => {
        this.setState({
            currentIndex:
                (this.state.currentIndex - 1 + this.imagesLength) %
                this.imagesLength,
        });
        e.stopPropagation();
    };

    nextSlide = e => {
        this.setState({
            currentIndex: (this.state.currentIndex + 1) % this.imagesLength,
        });
        e.stopPropagation();
    };

    render() {
        const { images, alt, isOverlay } = this.props;
        const { currentIndex } = this.state;

        return (
            <CarouselContainer>
                <ImageContainer isOverlay={isOverlay}>
                    <img src={images[currentIndex]} alt={alt} />
                </ImageContainer>
                {this.imagesLength > 1 && (
                    <ButtonContainer isOverlay={isOverlay}>
                        <button onClick={this.prevSlide}>
                            <img src={ArrowLeft} alt="prev" />
                        </button>
                        <button onClick={this.nextSlide}>
                            <img src={ArrowRight} alt="next" />
                        </button>
                    </ButtonContainer>
                )}
            </CarouselContainer>
        );
    }
}

export default Carousel;

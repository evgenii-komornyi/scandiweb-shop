import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { withRouter } from '../../utils/withRouter';
import DOMPurify from 'dompurify';

import CustomButton from '../custom-button/custom-button.component';

import { fetchProductById } from '../../redux/products/product.reducer';
import { addItem } from '../../redux/cart/cart.reducer';
import Price from '../price/price.component';

import { generateArticle } from '../../helpers/generate.helper';
import { checkForDuplicate } from '../../helpers/attributes.helper';

import {
    ProductContainer,
    GalleryContainer,
    ThumbnailsContainer,
    ThumbnailCanvas,
    Thumbnail,
    MainImageContainer,
    ProductDescriptionContainer,
    NameContainer,
    BrandContainer,
    AttributesContainer,
    PriceContainer,
    PriceLabel,
    PriceValue,
    Description,
} from './product-details.styles';
import Attributes from '../attributes/attributes.component';

class ProductDetails extends Component {
    constructor() {
        super();

        this.state = {
            selectedAttributes: [],
            currentIndex: 0,
        };
    }

    componentDidMount() {
        this.props.fetchProductById(this.props.params.productId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.params.productId !== prevProps.params.productId) {
            this.props.fetchProductById(this.props.params.productId);
        }
    }

    changeImage = index => {
        this.setState({ currentIndex: index });
    };

    addToCart = product => {
        const { selectedAttributes } = this.state;

        const productToCart = {
            ...product,
            article: generateArticle(product.id, selectedAttributes),
            selectedAttributes: selectedAttributes,
        };

        this.props.addItem(productToCart);
    };

    onChangeHandler = (name, value) => {
        this.setState(prevState => ({
            selectedAttributes: checkForDuplicate(
                prevState.selectedAttributes,
                name,
                value
            ).sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                }

                if (a.name < b.name) {
                    return -1;
                }

                return 0;
            }),
        }));
    };

    render() {
        const { product, isLoaded } = this.props.product;
        const { currentIndex, selectedAttributes } = this.state;

        const sanitize = data => ({ __html: DOMPurify.sanitize(data) });

        return (
            <>
                {isLoaded ? (
                    <>
                        <ProductContainer key={product.id}>
                            <GalleryContainer>
                                <ThumbnailsContainer>
                                    {product.gallery.map((image, index) => (
                                        <ThumbnailCanvas key={index}>
                                            <Thumbnail
                                                currentIndex={currentIndex}
                                                index={index}
                                                image={image}
                                                onClick={() =>
                                                    this.changeImage(index)
                                                }
                                            />
                                        </ThumbnailCanvas>
                                    ))}
                                </ThumbnailsContainer>
                                <MainImageContainer>
                                    <img
                                        src={product.gallery[currentIndex]}
                                        alt="unique"
                                    />
                                </MainImageContainer>
                            </GalleryContainer>
                            <ProductDescriptionContainer>
                                <NameContainer>{product.name}</NameContainer>
                                <BrandContainer>{product.brand}</BrandContainer>
                                <AttributesContainer>
                                    {product.attributes.length &&
                                    product.inStock ? (
                                        <Attributes
                                            attributes={product.attributes}
                                            onChange={this.onChangeHandler}
                                        />
                                    ) : null}
                                </AttributesContainer>
                                <PriceContainer>
                                    <PriceLabel>Price: </PriceLabel>
                                    <PriceValue>
                                        <Price prices={product.prices} />
                                    </PriceValue>
                                </PriceContainer>
                                {product.inStock ? (
                                    <CustomButton
                                        onClick={this.addToCart}
                                        product={product}
                                        disabled={
                                            product.attributes.length ===
                                            selectedAttributes.length
                                        }
                                    >
                                        Add to cart
                                    </CustomButton>
                                ) : (
                                    <h1>Out of Stock</h1>
                                )}
                                <Description
                                    dangerouslySetInnerHTML={sanitize(
                                        product.description
                                    )}
                                />
                            </ProductDescriptionContainer>
                        </ProductContainer>
                    </>
                ) : (
                    <h1>Loading...</h1>
                )}
            </>
        );
    }
}

const mapStateToProps = state => ({
    product: state.product,
});

const mapDispatchToProps = dispatch => ({
    fetchProductById: productId => dispatch(fetchProductById(productId)),
    addItem: product => dispatch(addItem(product)),
});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProductDetails);

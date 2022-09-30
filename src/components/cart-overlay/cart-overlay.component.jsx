import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from '../../utils/withRouter';

import { setIsCartOpen } from '../../redux/cart/cart.reducer';

import { calculateItemsCount } from '../../helpers/cart.helper';
import { convertMultipleItemsPrice } from '../../helpers/price.helper';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import TotalPrice from '../total-price/total-price.component';

import {
    CartOverlayContainer,
    CartContainer,
    CartHeader,
    ItemsContainer,
    CartFooter,
    TotalContainer,
    ButtonsContainer,
} from './cart-overlay.styles';

class CartOverlay extends Component {
    constructor() {
        super();
        this.wrapperRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = event => {
        if (
            this.wrapperRef &&
            !this.wrapperRef.current.contains(event.target)
        ) {
            this.props.setIsCartOpen(false);
        }
    };

    render() {
        const {
            cart: { isOpen, items },
            currencies: { currentCurrency },
            navigate,
        } = this.props;

        const convertedPrice =
            items.length && convertMultipleItemsPrice(items, currentCurrency);

        const itemsCount = calculateItemsCount(items);

        return (
            <>
                <CartOverlayContainer
                    isOpen={isOpen}
                    ref={this.wrapperRef}
                    onClick={() => this.props.setIsCartOpen(false)}
                >
                    <CartContainer
                        onClick={e => {
                            e.stopPropagation();
                        }}
                    >
                        {items.length > 0 ? (
                            <>
                                <CartHeader>
                                    {`My Bag: ${itemsCount} ${
                                        itemsCount === 1 ? 'item' : 'items'
                                    }`}
                                </CartHeader>
                                <ItemsContainer>
                                    {items.map((item, index) => (
                                        <CartItem
                                            key={item.id + '_' + index}
                                            item={item}
                                            index={index}
                                            isOverlay={true}
                                            convertedPrice={convertedPrice}
                                        />
                                    ))}
                                </ItemsContainer>
                                <CartFooter>
                                    <TotalContainer>
                                        <h3>Total:</h3>
                                        <h3>
                                            <TotalPrice
                                                convertedPrice={convertedPrice}
                                                items={items}
                                                currentCurrency={
                                                    currentCurrency
                                                }
                                            />
                                        </h3>
                                    </TotalContainer>
                                    <ButtonsContainer>
                                        <CustomButton
                                            onClick={() => {
                                                this.props.setIsCartOpen(false);
                                                navigate('/cart');
                                            }}
                                            disabled={true}
                                            inverted
                                        >
                                            View Bag
                                        </CustomButton>
                                        <CustomButton
                                            onClick={() => {
                                                alert('Checkout');
                                                navigate('/cart');
                                                this.props.setIsCartOpen(false);
                                            }}
                                            disabled={true}
                                        >
                                            Checkout
                                        </CustomButton>
                                    </ButtonsContainer>
                                </CartFooter>
                            </>
                        ) : (
                            <h6>Cart is empty.</h6>
                        )}
                    </CartContainer>
                </CartOverlayContainer>
            </>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
    currencies: state.currencies,
});

const mapDispatchToProps = dispatch => ({
    setIsCartOpen: isOpen => dispatch(setIsCartOpen(isOpen)),
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CartOverlay)
);

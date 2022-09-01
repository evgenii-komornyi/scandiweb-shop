export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
            cartItem => cartItem.id !== cartItemToRemove.id
        );
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

export const calculateTotalPrice = (cartItems, currentCurrency) => {
    const quantities = cartItems.map(({ quantity }) => quantity);

    const itemPrices = cartItems.map(({ prices }) =>
        prices
            .filter(
                price =>
                    price.currency.label === currentCurrency && price.amount
            )
            .reduce(
                (accumulatedPrice, price) => accumulatedPrice + price.amount,
                0
            )
    );

    return itemPrices.reduce(
        (accumulatedQuantity, cartItem, index) =>
            accumulatedQuantity + cartItem * quantities[index],
        0
    );
};

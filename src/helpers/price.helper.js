export const convertPrice = (prices, currentCurrency) => {
    const convertedPrice = prices.find(
        price => price.currency.label === currentCurrency
    );

    return [convertedPrice.amount, convertedPrice.currency.symbol];
};

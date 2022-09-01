export const convertPrice = (prices, currentCurrency) => {
    const correctPrice = prices.find(
        price => price.currency.label === currentCurrency
    );

    return {
        correctPrice: correctPrice.amount,
        correctSymbol: correctPrice.currency.symbol,
    };
};

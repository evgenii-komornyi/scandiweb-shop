export const convertPrice = (prices, currentCurrency) => {
    const correctPrice = prices.find(
        price => price.currency.label === currentCurrency
    );

    return {
        correctPrice: correctPrice.amount,
        correctSymbol: correctPrice.currency.symbol,
    };
};

export const convertMultipleItemsPrice = (items, currentCurrency) =>
    items.map(item => convertPrice(item.prices, currentCurrency));

export const roundNumber = numberToRound =>
    Math.round(numberToRound * 100) / 100;

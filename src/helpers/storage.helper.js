export const saveToStorage = (itemName, state) => {
    localStorage.setItem(itemName, JSON.stringify(state));
};

export const getFromStorage = itemName => {
    const items = localStorage.getItem(itemName);
    return items === null ? [] : JSON.parse(items);
};

export const getCurrencyFromStorage = itemName => {
    const items = localStorage.getItem(itemName);
    return items === null ? 'USD' : JSON.parse(items);
};

export const getActiveIndexFromStorage = itemName => {
    const items = localStorage.getItem(itemName);
    return items === null ? 0 : JSON.parse(items);
};

export const saveToStorage = (itemName, state) => {
    localStorage.setItem(itemName, JSON.stringify(state));
};

export const getFromStorage = itemName => {
    const items = localStorage.getItem(itemName);
    return items === null ? [] : JSON.parse(items);
};

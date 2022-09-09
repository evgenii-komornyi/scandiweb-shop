export const generateArticle = (productId, attributes) => {
    let result = `${productId}`;

    for (let i = 0; i < attributes.length; i++) {
        result += '+' + attributes[i].value;
    }

    return result;
};

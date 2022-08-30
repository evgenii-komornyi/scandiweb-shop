export const getAllCategoryNames = `{
    categories {
        name
    }
}`;

export const getCategoryByName = category => `{
    category(input: {title: "${category}"}) {
        name
        products {
            id
            name
            brand
            category
            description
            inStock
            gallery
            attributes {
                id
                name
                type
                items {
                    id
                    value
                    displayValue
                }
            }
            prices {
                amount
                currency {
                    label
                    symbol
                }
            }
        }
    }
}`;

export const getProductById = productId => `{
    product (id: "${productId}") {
        id
        name
        description
        brand
        category
        inStock
        attributes {
            id
            name
            type
            items {
                id
                value
                displayValue
            }
        }
        prices {
            amount
            currency {
                label
                symbol
            }
        }
        gallery
    }
}`;

export const getAllCurrencies = `{
    currencies {
        label
        symbol
    }
}`;

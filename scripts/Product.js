import { getProducts, getAllProductTypes } from "./database.js"

export const Product = (order) => {
    const products = getProducts()
    const types = getAllProductTypes()

    const orderProduct = products.find(p => p.id === order.productId)
    const type = types.find(t => t.id === product.productTypeId)

    return `
        ${orderProduct.name} [${type.type}] sold for ${orderProduct.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
     })}
    `
}
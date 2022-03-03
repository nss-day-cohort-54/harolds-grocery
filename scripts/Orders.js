import { getOrders } from "./database"
import { Employee } from "./Employee"
import { Product } from "./Product"

export const Orders = () => {
    const orders = getOrders()

    return `
        ${
            orders.map(
                (order) => {
                    return `<div>
                        <h4>Order ${order.id}</h4>
                        <div>${ Product(order) }</div>
                        <div>${ Employee(order) }</div>
                    </div>`
                }
            )
        }
    `
}
import { Orders } from "./Orders.js"

const container = document.querySelector("#container")

const render = () => {
    container.innerHTML = `
        <h1>Harold's Grocery Order History</h1>

        ${ Orders() }
    `
}

render()
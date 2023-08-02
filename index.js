const express = require("express")

const port = 3000

const app = express()

const uuid = require("uuid")
app.use(express.json())


const orders = []

const check = (request, response, next) => {
    const { id } = request.params

    const index = orders.findIndex(orders => orders.id === id)

    if (index < 0) {
        return response.status(404).json({ error: "Pedido nao encontrado!!" })
    }

    request.orderIndex = index
    request.orderId = id

    next()
}

const requestCheck = (request, response, next) => {
    const method = request.method

    const url = request.url

    console.log(`[${method}] - ${url} `)

    next()
}



app.get("/order", requestCheck, (request, response) => {



    return response.json(orders)

})

app.post("/order", requestCheck, (request, response) => {

    const { order, clientName, price, status } = request.body



    const newOrder = { id: uuid.v4(), order, clientName, price, status }


    orders.push(newOrder)
    return response.status(201).json(newOrder)

})

app.put("/order/:id", check, requestCheck, (request, response) => {
    const { id } = request.params
    const { order, clientName, price, status } = request.body

    const updatedOrder = { id, order, clientName, price, status }

    const index = orders.findIndex(order => order.id === id)
    if (index < 0) {
        return response.status(404).json({ message: "Pedido não encontrado" })
    }

    orders[index] = updatedOrder


    return response.json(updatedOrder)

})

app.delete("/order/:id", check, requestCheck, (request, response) => {

    const { id } = request.params
    const index = orders.findIndex(order => order.id === id)

    if (index < 0) {
        return response.status(404).json({ message: "Pedido não encontrado" })
    }



    orders.splice(index, 1)

    return response.status(201).json({ message: "Pedido cancelado com sucesso!" })








})


app.patch("/order/:id", (request, response) => {
    const { id } = request.params;
    const { status } = request.body;

    const index = orders.findIndex(order => order.id === id);
    if (index !== -1) {
        orders[index].status = status || "Pronto";
        response.json(orders[index]);
    } else {
        response.status(404).json({ message: "Pedido não encontrado!!" });
    }
});


app.listen(port, () => {
    console.log(`O SERVER ESTÁ RODANDO NA PORTA ${port} 😁🚀`)
})















































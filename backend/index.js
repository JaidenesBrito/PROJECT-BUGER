const { request, response } = require('express')
const express = require('express')
const uuid = require('uuid')
const cors = require('cors')

const port = 3001
const app = express()
app.use(express.json())
app.use(cors())


const order = []

const checkUserId = (request, response, next) => {
    const { id } = request.params

    const index = order.findIndex(user => user.id === id)

    if (index < 0) {
        return response.status(404).json({ error: "User not faund" })
    }
    request.userIndex = index
    request.userId = id

    next()
}


app.get('/order', (request, response) => {
    return response.json(order);
});

app.post('/order', (request, response) => {
    const { pedido, name } = request.body

    const user = { id:uuid.v4(), pedido, name }

    order.push(user)

    return response.status(201).json(user)
})

app.put('/order/:id', checkUserId, (request, response) => {
    const { name, age } = request.body
    const index = request.userIndex
    const id = request.userId

    const updatedUser = { id, name, pedido }

    users[index] = updatedUser

    return response.json(updatedUser)
})

app.delete('/order/:id', checkUserId, (request, response) => {
    const index = request.userIndex

    order.splice(index, 1)

    return response.status(204).json()

})



app.listen(port, () => {
    console.log(`🚀 server started on port ${port}`)
})    
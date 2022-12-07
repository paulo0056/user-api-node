const express = require("express")
const UserModel = require('../src/models/user.model')
const app = express();

app.use(express.json());

app.get("/home", (req, res) => {
    res.status(200).send("<h1>Hello world</h1>")
})

app.get("/users", async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.status(200).json(users)
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

app.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findById(id)
        res.status(200).json(user)
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body)

        res.status(201).json(user)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

app.put('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })

        res.status(200).json(user)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndRemove(id)

        res.status(200).json(user)
    } catch (err) {
        res.status(500).send(err.message)
    }
})
const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta ${port}`))
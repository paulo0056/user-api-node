const mongoose = require('mongoose')

const connectToDataBase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.l14eyjc.mongodb.net/database?retryWrites=true&w=majority`, (err) => {
        if (err) {
            console.log('Ocorreu um erro ao se conectar ao banco de dados:', err)

        }
        return console.log('Conexão com banco de dados foi um sucesso!')
    })
}
module.exports = connectToDataBase;
const express = require('express')
const cad = require('./services/servData')

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

app.post('/save', async (req, res) =>{
    const { nome, departamento, cpf, telefone, email } = req.body
    const data = {
        nome: {nome},
        departamento: {departamento},
        cpf: {cpf},
        telefone: {telefone},
        email: {email}
    }
    try{
        await cad.saveCadastro(data)
        res.send(data)
    }catch(error){
        res.send("error")
    }
})


app.listen(port, () => console.log(`Servidor iniciado na porta ${port}!`))
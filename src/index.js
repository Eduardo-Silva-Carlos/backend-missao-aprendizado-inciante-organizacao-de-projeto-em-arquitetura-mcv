require('dotenv').config()
const express = require('express')
const { connectToDataBase } = require('./db/database-connection')
const personagemRouter = require('./personagem/personagem.router')
//const { MongoClient, ObjectId } = require('mongodb')


// Funtion async create 
async function main() {
  await connectToDataBase()
  //const collection = db.collection('personagem')

  const app = express()
  //MiddLewares
  // Sinalizo para o Express que estamos utilizando JSON no body
  app.use(express.json())

  app.get('/', function (req, res) {
    res.send('Hello World')
  })

  app.use('/personagem', personagemRouter)

  // FIX: Mover isso para pasta  'personagem'
  /*
   
  })



  // EndPoint Create [POST] /personagem
  app.post('/personagem', async function (req, res) {

    //Acessamos o bory da requisição
    const novoItem = req.body

    //Checa se o 'nome' esta presente no body
    if (!novoItem || !novoItem.nome) {
      return res.status(400).send('Corpo da requisição conter a propriedade `nome`.')
    }

    // crtl + ; acrescentar linhas de comentario e retirar 
    // // Checa se o novoItem está na lista ou não
    // if (lista.includes(novoItem)) {
    //   return res.status(409).send('Esse item já existe na lista!')
    // }

    //Adicionamos nome na collection
    await collection.insertOne(novoItem)

    //Exibimos uma mensagem de sucesso 
    res.status(201).send()

  })

  //EndPoint Update [PUT]/personagem/:id 
  app.put('/personagem/:id', async function (req, res) {
    //Acessamos o ID dos parâmetros da rota
    const id = req.params.id

    // //Checamos se o item do id-1 está na lista , exibindo um mensagem caso não esteja
    // if (!lista[id - 1]) {
    //   return res.status(404).send('Item não encontrado!')
    // }

    // Acessamos o Bory de requisição 
    const novoItem = req.body

    //Checa se o 'nome' esta presente no body
    if (!novoItem || !novoItem.nome) {
      return res.status(400).send('Corpo da requisição conter a propriedade `nome`.')
    }
    // // Checa se o novoItem está na lista ou não
    // if (lista.includes(novoItem)) {
    //   return res.status(409).send('Esse item já existe na lista!')
    // }
    // Atualizamos na collection  novoItem pelo ID
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: novoItem }
    )

    // Eviamos uma mensagem de sucesso 
    res.send(novoItem)

  })
  // EndPoint delete [DELETE]/personagem/:id 
  app.delete('/personagem/:id', async function (req, res) {
    // Acessamos o parâmentro de rota 
    const id = req.params.id

    // //Checamos se o item do id-1 está na lista , exibindo um mensagem caso não esteja
    // if (!lista[id - 1]) {
    //   return res.status(404).send('Item não encontrado!')
    // }

    //Remover o item da collection usando ID
    await collection.deleteOne({ _id: new ObjectId(id) })
    // Enviamos uma mensagem de sucesso
    res.send('Item removido com sucesso : ' + id)
  })
  */
  app.listen(3000, function () {
    console.log("Servidor rodando em : http://localhost:3000")
  })
}
main()

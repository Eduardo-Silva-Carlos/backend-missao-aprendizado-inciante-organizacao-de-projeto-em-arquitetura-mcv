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

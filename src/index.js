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

 
  app.listen(3000, function () {
    console.log("Servidor rodando em : http://localhost:3000")
  })
}
main()

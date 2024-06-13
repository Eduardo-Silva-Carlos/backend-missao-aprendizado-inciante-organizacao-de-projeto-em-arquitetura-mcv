require('dotenv').config()
const express = require('express')
const { connectToDataBase } = require('./db/database-connection')

// Routers
const personagemRouter = require('./personagem/personagem.router')

// Declaramos a função main
async function main() {
  //Conctamos com os BD 
  await connectToDataBase()
  // Inicializamos o express
  const app = express()
  //MiddLewares
  // Sinalizo para o Express que estamos utilizando JSON no body
  app.use(express.json())
// endPoint hello world 
  app.get('/', function (req, res) {
    res.send('Hello World')
  })
// Routers
  app.use('/personagem', personagemRouter)

  app.listen(3000, function () {
    console.log("Servidor rodando em : http://localhost:3000")
  })
}
// Iniciamos a main 
main()

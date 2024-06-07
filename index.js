require('dotenv').config()
const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')

//Prepara aas infomações para o banco de dados 
const dbUrl = process.env.DATABASE_URL
const dbName = 'mongodb-intro-e-implementacao'


// Funtion async create 
async function main() {
  const client = new MongoClient(dbUrl)
  console.log('Conectando com o banco de dados...')
  await client.connect()
  console.log('Banco de dados conectado com sucesso!...')

  const db = client.db(dbName)
  const collection = db.collection('personagem')

  const app = express()

  app.get('/', function (req, res) {
    res.send('Hello World')
  })

  const lista = ['Java', 'Kotlin', 'Android']

  // EndPoint Read All '[GET] /personagem'
  app.get('/personagem', async function (req, res) {
    // Acessamos a lista de intens na collection do mongoDB
    const itens = await collection.find().toArray()
    // Enviamos a lista de intens como resultado
    res.send(itens)
  })

  // EndPoint Read BY ID [GET]/personagem/:id
  app.get('/personagem/:id', async function (req, res) {
    // Acessando os parametros de rota ID
    const id = req.params.id

    // Acessa o item na collection usando o ID
    const item = await collection.findOne({ _id: new ObjectId(id) })

    //Checamos se o item foi obtido é existente 
    if (!item) {
      return res.status(404).send('Item não encontrado!')
    }

    //Enviamos o item como resposta 
    res.send(item)
  })

  // Sinalizo para o Express que estamos utilizando JSON no body
  app.use(express.json())

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

  app.listen(3000)
}
main()

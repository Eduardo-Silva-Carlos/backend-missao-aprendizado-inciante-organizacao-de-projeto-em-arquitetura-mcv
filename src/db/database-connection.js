const { MongoClient } = require("mongodb")

//Prepara aas infomações para o banco de dados 
const dbUrl = process.env.DATABASE_URL
const dbName = 'mongodb-arquitetura-mcv'

const client = new MongoClient(dbUrl)



async function connectToDataBase() {

  console.log('Conectando com o banco de dados...')
  await client.connect()
  console.log('Banco de dados conectado com sucesso!...') 
}

function getDateBase() {
  return client.db(dbName)
}

module.exports = {
  connectToDataBase, 
  getDateBase
}
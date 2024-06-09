const { MongoClient } = require("mongodb")

//Prepara aas infomações para o banco de dados 
const dbUrl = process.env.DATABASE_URL
const dbName = 'mongodb-arquitetura-mcv'

async function connectToDataBase() {
  const client = new MongoClient(dbUrl)
  console.log('Conectando com o banco de dados...')
  await client.connect()
  console.log('Banco de dados conectado com sucesso!...')

  const db = client.db(dbName)
  // FIXME: Usar o DB de alguma forma 

}

module.exports = {
  connectToDataBase
}
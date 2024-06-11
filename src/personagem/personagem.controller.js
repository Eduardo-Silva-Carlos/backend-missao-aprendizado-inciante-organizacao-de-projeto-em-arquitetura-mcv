const service = require('./personagem.service')

async function readAll(req, res) {
  // Acessamos a lista de personagem no service
  const items = await service.readAll()

  // Enviamos a lista de persogem como resultado
  res.send(items)
}
async function readById(req, res) {
  // Acessando os parametros de rota ID
  const id = req.params.id
  //Acessamos o personagem no service através do id 
  const item = await service.readById(id)

  //Checamos se o item foi obtido é existente 
  if (!item) {
    return res.status(404).send('Item não encontrado!')
  }
  //Enviamos o item como resposta 
  res.send(item)
}
async function create(req, res) {
  //Acessamos o bory da requisição
  const newItem = req.body

  //Checa se o 'nome' esta presente no body
  if (!newItem || !newItem.nome) {
    return res.status(400).send('Corpo da requisição conter a propriedade `nome`.')
  }

  //Adicionamos no DB através do service
  await service.create(newItem)
  //Exibimos uma mensagem de sucesso 
  res.status(201).send(newItem)
}
function updateById(req, res) {
  res.send('UpdateById')
}
function deleteById(req, res) {
  res.send('DeleteById')
}
module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById
}
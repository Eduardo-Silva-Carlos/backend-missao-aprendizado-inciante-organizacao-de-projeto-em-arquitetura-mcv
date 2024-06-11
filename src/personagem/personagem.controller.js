const service = require('./personagem.service')

async function readAll(req, res) {
  // Acessamos a lista de personagem no service
  const items = await service.readAll()

  // Enviamos a lista de persogem como resultado
  res.send(items)
}
function readById(req, res) {
  res.send('ReadById')
}
function create(req, res) {
  res.send('Create')
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
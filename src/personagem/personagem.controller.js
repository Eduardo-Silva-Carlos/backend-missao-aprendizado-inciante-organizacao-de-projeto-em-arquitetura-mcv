const service = require('./personagem.service')

async function readAll(req, res) {
  const items = await service.readAll()

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
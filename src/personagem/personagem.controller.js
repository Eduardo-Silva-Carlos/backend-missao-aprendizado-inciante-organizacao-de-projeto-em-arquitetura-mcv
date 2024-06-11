function readAll(req, res) {
  res.send('ReadAll')
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
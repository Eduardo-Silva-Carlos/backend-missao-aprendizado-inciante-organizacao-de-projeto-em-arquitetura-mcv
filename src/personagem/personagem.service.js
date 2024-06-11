const { getDateBase } = require("../db/database-connection")

function getColletion() {
    return  getDateBase().collection('personagem')
}

function readAll() {
    return  getColletion().find().toArray()
}

function readById() {
}

function create() {
}

function updateById() {
}

function deleteById() {
}

module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById,
}
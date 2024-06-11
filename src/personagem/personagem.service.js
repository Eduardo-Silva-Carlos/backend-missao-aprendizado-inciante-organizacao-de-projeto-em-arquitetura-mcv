const { ObjectId } = require('mongodb')
const { getDateBase } = require('../db/database-connection')

function getColletion() {
  return getDateBase().collection('personagem')
}

function readAll() {
  // acessamos a lista de personagem no collection do MongoDB
  return getColletion().find().toArray()
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
function readById(id) {
  // Retornar o item na collection usando o ID
  return getColletion().findOne({ _id: new ObjectId(id) })
}

function create(newItem) {
    //Adicionamos nome na collection
  return getColletion().insertOne(newItem)
}
/**
 * 
 * @param {string} id 
 * @returns 
 */

function updateById(id, newItem) {
     // Atualizamos na collection  newItem  pelo ID
     return getColletion().updateOne(
      { _id: new ObjectId(id) },
      { $set: newItem }
    )
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
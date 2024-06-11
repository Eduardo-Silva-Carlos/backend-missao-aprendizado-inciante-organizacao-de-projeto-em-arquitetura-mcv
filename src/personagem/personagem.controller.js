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
async function updateById(req, res) {

  const id = req.params.id

  // Acessamos o Bory de requisição 
  const newItem = req.body

  //Checa se o 'nome' esta presente no body
  if (!newItem || !newItem.nome) {
    return res.status(400).send('Corpo da requisição conter a propriedade `nome`.')
  }


  //Atualizamos no DB um novoItem pelo ID, usando o service
  await service.updateById(id, newItem)
  // Eviamos uma mensagem de sucesso 
  res.send(newItem)

}

async function deleteById(req, res) {

    // Acessamos o parâmentro de rota 
    const id = req.params.id
    //Remover o item do DB usando id via service
    await service.deleteById(id)
    // Enviamos uma mensagem de sucesso
    res.send('Item removido com sucesso : ' + id)
  
}
module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById
}
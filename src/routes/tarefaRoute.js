const express = require('express')
const route = express.Router()
const tarefaController = require('../controllers/tarefaController')
const apiController = require('../controllers/apiController')
const tarefaValidation = require('../util/tarefaValidation')

route.get('/', apiController.verifica, tarefaController.listar)
route.get('/:id', apiController.verifica,tarefaValidation.listarPorId, tarefaController.listarPorId)
route.post('/', apiController.verifica, tarefaValidation.inserir,tarefaController.inserir)
route.put('/:id', apiController.verifica,tarefaValidation.alterar ,tarefaController.alterar)
route.delete('/:id', apiController.verifica,tarefaValidation.deletar, tarefaController.deletar)


module.exports = route

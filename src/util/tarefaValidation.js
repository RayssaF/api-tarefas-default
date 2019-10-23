const { check } = require('express-validator')

exports.listarPorId = [
  check('id')
   .exists().withMessage('O id não pode estar em branco')
   .isInt().withMessage('O id deve ser um número inteiro')
]

exports.inserir = [
  check('descricao').exists().trim().withMessage('A descrição não pode estar em branco'),
  check('data').exists().withMessage('A data não pode estar em branco'),
  check('categoria_id')
    .exists().withMessage('O Id da categoria não pode estar em branco')
    .isInt().withMessage('O id da categoria deve ser um numero inteiro')
]

exports.alterar = [
  check('id')
    .exists().withMessage('O id não pode estar em branco')
    .isInt().withMessage('O id deve ser um número inteiro'),
  check('descricao').exists().trim().withMessage('A descrição não pode estar em branco'),
  check('data').exists().withMessage('A data não pode estar em branco'),
  check('categoria_id')
    .exists().withMessage('O Id da categoria não pode estar em branco')
    .isInt().withMessage('O id da categoria deve ser um numero inteiro')
]

exports.deletar = [
  check('id')
   .exists().withMessage('O id não pode estar em branco')
   .isInt().withMessage('O id deve ser um número inteiro')
]




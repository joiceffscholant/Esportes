const Sequelize = require('Sequelize')
const config = require("../config/database")
const Produto = require('../model/Produto')

const conexao = new Sequelize(config);

Produto.init(conexao);

module.exports = conexao;
const bodyParser = require('body-parser')
const paradas = require('./paradasRoute')
const linhas = require('./linhasRoute')
const veiculos = require('./veiculosRoute')
const posicaoVeiculo = require('./posicaoVeiculoRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(paradas)
    app.use(linhas)
    app.use(veiculos)
    app.use(posicaoVeiculo)
}
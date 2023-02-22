const { Router } = require('express')
const PosicaoVeiculoController = require('../controllers/PosicaoVeiculoController')

const router = Router();

router
    .get('/posicaoveiculo', PosicaoVeiculoController.pegaTodasAsPosicoesDoVeiculo)
    .get('/posicaoveiculo/:id', PosicaoVeiculoController.pegaUmaPosicaoDoVeiculo)
    .post('/posicaoveiculo', PosicaoVeiculoController.criaNovaPosicaoDoVeiculo)
    .put('/posicaoveiculo/:id', PosicaoVeiculoController.atualizaPosicaoDoVeiculo)
    .delete('/posicaoveiculo/:id', PosicaoVeiculoController.deletaPosicaoDoVeiculo)


module.exports = router
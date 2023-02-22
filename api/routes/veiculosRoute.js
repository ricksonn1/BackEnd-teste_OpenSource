const { Router } = require('express');
const VeiculoController = require('../controllers/VeiculoController')

const router = Router();

router
    .get('/veiculos', VeiculoController.pegaTodosOsVeiculos)
    .get('/veiculos/:id', VeiculoController.pegaUmVeiculo)
    .put('/veiculos/:id', VeiculoController.atualizaVeiculo)
    .post('/veiculos', VeiculoController.criaVeiculo)
    .delete('/veiculos/:id', VeiculoController.deletaVeiculo)
    .get('/veiculos/:linhas_id/linhas', VeiculoController.pegaTodosOsVeiculosPorLinhaInformada)


module.exports = router;
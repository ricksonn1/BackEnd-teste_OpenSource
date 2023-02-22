const { Router } = require('express')
const LinhaController = require('../controllers/LinhaController');

const router = Router();

router
    .get('/linhas', LinhaController.pegaTodasAsLinhas)
    .get('/linhas/:id', LinhaController.pegaUmaLinha)
    .put('/linhas/:id', LinhaController.atualizaUmaLinha)
    .post('/linhas', LinhaController.criaNovaLinha)
    .delete('/linhas/:id', LinhaController.deletaLinha)
    .get('/linhas/:paradas_id/paradas', LinhaController.pegaTodasAsLinhasPorParada)


module.exports = router;
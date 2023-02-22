const { Router } = require('express');
const ParadaController = require('../controllers/ParadaController');

const router = Router()

router
    .get('/paradas', ParadaController.pegaTodasAsParadas)
    .get('/paradas/:id', ParadaController.pegaUmaParada)
    .put('/paradas/:id', ParadaController.atualizaParada)
    .post('/paradas', ParadaController.criaNovaParada)
    .delete('/paradas/:id', ParadaController.deletaParada)


module.exports = router
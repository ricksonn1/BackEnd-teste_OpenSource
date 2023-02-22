const database = require('../models');

class PosicaoVeiculoController {

    static async pegaTodasAsPosicoesDoVeiculo(req, res) {
        try {
            const todasPosicoesDoVeiculo = await database.PosicaoVeiculo.findAll()
            return res.status(200).json(todasPosicoesDoVeiculo)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async pegaUmaPosicaoDoVeiculo(req, res) {
        const { id } = req.params
        try {
            const umaPosicaoDoVeiculo = await database.PosicaoVeiculo.findOne({ where: { id: Number(id) } })
            res.status(200).json(umaPosicaoDoVeiculo)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async atualizaPosicaoDoVeiculo(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.PosicaoVeiculo.update(novasInfos, { where: { id: Number(id) } })
            const mostraUmaPosicaoAtualizada = await database.PosicaoVeiculo.findOne({ where: { id: Number(id) } })
            return res.status(200).json(mostraUmaPosicaoAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async criaNovaPosicaoDoVeiculo(req, res) {
        const novaPosicaoDoVeiculo = req.body
        try {
            const posicaoDoVeiculoNova = await database.PosicaoVeiculo.create(novaPosicaoDoVeiculo)
            return res.status(200).json(posicaoDoVeiculoNova)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaPosicaoDoVeiculo(req, res) {
        const { id } = req.params
        try {
            const verificaPosicaoDoVeiculo = await database.PosicaoVeiculo.findOne({ where: { id: Number(id) } })
            console.log(verificaPosicaoDoVeiculo)
            if (verificaPosicaoDoVeiculo === null) {
                res.status(404).json({Mensagem: `Esse ID não existe!`})
            } else {
                await database.PosicaoVeiculo.destroy({ where: { id: Number(id) } })
                return res.status(200).json({ Mensagem: `ID: ${id} deletado com sucesso!` })
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PosicaoVeiculoController;
const database = require('../models');

class VeiculoController {

    static async pegaTodosOsVeiculos(req, res) {
        try {
            const todosOsVeiculos = await database.Veiculos.findAll()
            return res.status(200).json(todosOsVeiculos)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmVeiculo(req, res) {
        const { id } = req.params
        try {
            const umVeiculo = await database.Veiculos.findOne({ where: { id: Number(id) } })
            return res.status(200).json(umVeiculo)
        } catch (error) {
            return res.status(error.message)
        }
    }
    static async atualizaVeiculo(req, res) {
        const { id } = req.params
        const novasInfosDoVeiculo = req.body
        try {
            await database.Veiculos.update(novasInfosDoVeiculo, { where: { id: Number(id) } })
            const veiculoAtualizado = await database.Veiculos.findOne({ where: { id: Number(id) } })
            return res.status(200).json(veiculoAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaVeiculo(req, res) {
        const veiculoNovo = req.body
        try {
            await database.Veiculos.create(veiculoNovo)
            const veiculoCriado = await database.Veiculos.findAll()
            return res.status(200).json(veiculoCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async deletaVeiculo(req, res) {
        const { id } = req.params
        try {
            const verificaIdVeiculo = await database.Veiculos.findOne({ where: { id: Number(id) } })
            console.log(verificaIdVeiculo)
            if (verificaIdVeiculo === null) {
                res.status(404).json({ mensagem: `Esse ID não existe` })
            } else {
                await database.Veiculos.destroy({ where: { id: Number(id) } })
                return res.status(200).json({ mensagem: `ID ${id} deletado com sucesso!` })
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async pegaTodosOsVeiculosPorLinhaInformada(req, res) {
        const { linhas_id } = req.params
        try {
            const todosVeiculosPorLinha = await database.Veiculos.findAll({ where: { linhas_id: Number(linhas_id) } })
            return res.status(200).json(todosVeiculosPorLinha)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = VeiculoController
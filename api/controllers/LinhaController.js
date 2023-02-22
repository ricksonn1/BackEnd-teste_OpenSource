const database = require('../models');

class LinhaController {

    static async pegaTodasAsLinhas(req, res) {
        try {
            const todasAsLinhas = await database.Linhas.findAll()
            return res.status(200).json(todasAsLinhas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaLinha(req, res) {
        const { id } = req.params
        try {
            const umaLinha = await database.Linhas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(umaLinha)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaUmaLinha(req, res) {
        const { id } = req.params
        const novasInfosDaLinha = req.body
        try {
            await database.Linhas.update(novasInfosDaLinha, { where: { id: Number(id) } })
            const linhaAtualizada = await database.Linhas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(linhaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaNovaLinha(req, res) {
        const novaLinha = req.body
        try {
            await database.Linhas.create(novaLinha)
            const mostraLinhasCriadas = await database.Linhas.findAll()
            return res.status(200).json(mostraLinhasCriadas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaLinha(req, res) {
        const { id } = req.params
        try {
            const verificaIdDaLinha = await database.Linhas.findOne({ where: { id: Number(id) } })
            console.log(verificaIdDaLinha)
            if (verificaIdDaLinha === null) {
                res.status(404).json({ Mensagem: `Esse ID não existe!` })
            } else {
                await database.Linhas.destroy({ where: { id: Number(id) } })
                return res.status(200).json({ mensagem: `ID ${id} deletado com sucesso!` })
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async pegaTodasAsLinhasPorParada(req, res) {
        const { paradas_id } = req.params
        try {
            const todasLinhasPorParada = await database.Linhas.findAll({ where: { paradas_id: Number(paradas_id) } })
            return res.status(200).json(todasLinhasPorParada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}


module.exports = LinhaController;
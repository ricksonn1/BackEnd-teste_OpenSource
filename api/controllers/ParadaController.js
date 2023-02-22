const database = require('../models')

class ParadaController {

    static async pegaTodasAsParadas(req, res) {
        try {
            const todasAsParadas = await database.Paradas.findAll()
            return res.status(200).json(todasAsParadas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaParada(req, res) {
        const { id } = req.params
        try {
            const umaParada = await database.Paradas.findOne({ where: { id: Number(id) } })
            res.status(200).json(umaParada)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async atualizaParada(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Paradas.update(novasInfos, { where: { id: Number(id) } })
            const mostraParadaAtualizada = await database.Paradas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(mostraParadaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async criaNovaParada(req, res) {
        const novaParada = req.body
        try {
            const paradaNova = await database.Paradas.create(novaParada)
            return res.status(200).json(paradaNova)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaParada(req, res) {
        const { id } = req.params
        try {
            const verificaId = await database.Paradas.findOne({ where: { id: Number(id) } })
            console.log(verificaId)
            if (verificaId === null) {
                res.status(404).json({ mensagem: `Esse ID não existe, tente um ID válido!` })
            } else {
                await database.Paradas.destroy({ where: { id: Number(id) } })
                return res.status(200).json({ mensage: `ID deletado!` })
            }
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}


module.exports = ParadaController
import { v4 } from 'uuid'
import Game from '../models/Game'
import Games from '../models/Game'

class GameFactoryController {
    async store(req, res) {

        // // const { filename: path } = req.file

        // const GameExists = await Games.findOne({ where: { name, } })

        // if (GameExists) {
        //     return res.status(400).json({ error: "This Game already exists" })
        // }  aqui você vai adicionar uma imagem ao produto 

        const { name, category, price } = req.body


        const gaming = await Games.create({
            id: v4(),
            name,
            category,
            price,
        })
        return res.json(gaming)
    }

    async update(req, res) {


        const { name, category, price } = req.body
        const { id } = req.params

        await Game.update({ name, category, price }, { where: { id } })

        return res.status(200).json({ message: "game updated" })
    }

    async index(req, res) {
        const allGames = await Game.findAll()
        return res.status(201).json(allGames)
    }
    async delete(req, res) {
        const { id } = req.params

        const deleteGame = await Game.destroy({ where: { id } })
        return res.status(202).json({ message: "game deleted" })
    }
}

export default new GameFactoryController()
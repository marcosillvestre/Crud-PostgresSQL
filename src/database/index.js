import Sequelize from "sequelize"
import dbconfig from "../config/database"
import Game from "../app/models/Game"


const models = [Game]

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(dbconfig)
        models.map((model) => model.init(this.connection))
    }
}

export default new Database()

import Sequelize, { Model } from "sequelize";

class Game extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            category: Sequelize.STRING,
            price: Sequelize.STRING,
            // path: Sequelize.STRING,
            // url: {
            //     type: Sequelize.VIRTUAL,
            //     get() {
            //         return `http://localhost:3005/games-photos/${this.path}`
            //     }
            // }

        }, {
            sequelize,
        }
        )
        return this
    }
}

export default Game
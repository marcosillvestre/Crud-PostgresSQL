import { Router } from "express"

import GameController from './app/controllers/GameController'

const routes = new Router()


routes.post('/games', GameController.store)
routes.get('/games', GameController.index)
routes.put('/games/:id', GameController.update)
routes.delete('/games/:id', GameController.delete)

// routes.put('/games/:id', upload.single('file'), GameController.update)


// routes.get('/', (req, res) => {
//     return res.json({ message: 'conseguimo' })
// })


export default routes


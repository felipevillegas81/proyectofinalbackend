import cartsDao from '../daos/dbManager/carts.dao.js'

class CartsController {
async getCarts(req, res) {
    try {
        const carts = await cartsDao.getAll()
        res.json(carts)
    } catch (error) {
        res.status(500).json( {error: error.message} )
    }
    }
}

export default new CartsController()
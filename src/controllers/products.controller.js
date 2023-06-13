import productsDao from '../daos/dbManager/products.dao.js'

class ProductsController {
async getProducts(req, res) {
    try {
        const products = await productsDao.getAll()
        res.json(products)
    } catch (error) {
        res.status(500).json( {error: error.message} )
    }
    }
}

export default new ProductsController()
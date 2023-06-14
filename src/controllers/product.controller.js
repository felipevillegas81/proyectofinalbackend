import productValidator from '../validators/product.validator.js'
import productsValidator from '../validators/products.validator.js'
import productsDao from '../daos/dbManager/products.dao.js'
import ProductsDto from '../daos/dtos/products.dto.js';

class ProductController {

    async getProduct(req, res) {
        try {
            const product = await productsDao.getById(req.params.id)
            res.json(product)
        } catch (error) {
            res.status(500).json( {error: error.message} )
        }
    }

    async createProduct(req, res) {

        try {
            const product = new ProductsDto(req.body)
            await productsDao.create(product)
            res.redirect('/?message=product created successfully')
        } catch (error) {
            res.status(500).json( {error: error.message} )
        }
    }

    async updateProduct(req, res) {
        try {
            const product = await productsDao.update(req.params.id, req.body)
            res.json(product)
        } catch (error) {
            res.status(500).json( {error: error.message} )
        }
    }

    async deleteProduct(req, res) {

        try {
            const { id } = req.params
            const product = await productValidator.deleteProduct(id)

            if (product){
                const products = await productsValidator.getAllProducts()
                res.render('index', 
                { title: 'Home',
                products,
                user: req.session.user})
            }
            } catch (error) {
            res.json(error)
        }
    }
}

export default new ProductController()
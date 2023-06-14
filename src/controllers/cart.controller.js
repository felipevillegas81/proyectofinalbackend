import cartValidator from '../validators/cart.validator.js'
import cartsValidator from '../validators/carts.validator.js'
import cartsDao from '../daos/dbManager/carts.dao.js'
import CartsDto from '../daos/dtos/carts.dto.js';

class CartController {

    async getCart(req, res) {
        try {
            const cart = await cartsDao.getById(req.params.id)
            res.json(cart)
        } catch (error) {
            res.status(500).json( {error: error.message} )
        }
    }

    async createCart(req, res) {

        try {
            const cart = new CartsDto(req.body)
            await cartsDao.create(cart)
            res.redirect('/?message=cart created successfully')
        } catch (error) {
            res.status(500).json( {error: error.message} )
        }
    }

    async updateCart(req, res) {
        try {
            const cart = await cartsDao.update(req.params.id, req.body)
            res.json(cart)
        } catch (error) {
            res.status(500).json( {error: error.message} )
        }
    }

    async deleteCart(req, res) {

        try {
            const { id } = req.params
            const cart = await cartValidator.deleteCart(id)

            if (cart){
                const carts = await cartsValidator.getAllCarts()
                res.render('index', 
                { title: 'Home',
                carts,
                user: req.session.user})
            }
            } catch (error) {
            res.json(error)
        }
    }
}

export default new CartController()
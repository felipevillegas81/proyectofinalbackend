import cartModel from "../models/cart.model.js"

class CartServices {
    find() {
        return cartModel.find();
    }
}

export default new CartServices()
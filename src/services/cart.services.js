import cartModel from "../models/cart.model.js";

class CartServices {
    
    delete(id) {
        return cartModel.findByIdAndDelete(id);
    }
}

export default new CartServices()
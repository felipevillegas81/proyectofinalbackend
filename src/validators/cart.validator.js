import cartServices from "../services/cart.services.js";

class CartValidator {
    async deleteCart(id) {
        const cart = await cartServices.delete(id)
        return cart
    } catch(error){
        return error
    }
}

export default new CartValidator()
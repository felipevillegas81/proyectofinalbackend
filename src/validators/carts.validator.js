import cartsServices from "../services/products.services.js";

class CartsValidator {
    async getAllCarts() {
        const carts = await cartsServices.find()
        return carts
    } catch(error){
        return error
    }
}

export default new CartsValidator()
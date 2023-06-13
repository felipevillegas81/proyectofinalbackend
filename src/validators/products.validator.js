import productsServices from "../services/products.services.js";

class ProductsValidator {
    async getAllProducts() {
        const products = await productsServices.find()
        return products
    } catch(error){
        return error
    }
}

export default new ProductsValidator()
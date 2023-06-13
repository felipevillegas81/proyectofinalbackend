import productServices from "../services/product.services.js";

class ProductValidator {
    async deleteProduct(id) {
        const product = await productServices.delete(id)
        return product
    } catch(error){
        return error
    }
}

export default new ProductValidator()
import productModel from "../models/product.model.js"

class ProductsServices {
    find() {
        return productModel.find();
    }
}

export default new ProductsServices()
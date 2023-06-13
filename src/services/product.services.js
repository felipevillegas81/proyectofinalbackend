import productModel from "../models/product.model.js";

class ProductServices {

    delete(id) {
        return productModel.findByIdAndDelete(id);
    }
    
}

export default new ProductServices()
import { Router } from "express"
import productController from '../controllers/product.controller.js'
import productsController from "../controllers/products.controller.js"
import passport from "passport"

const router = Router()

router.get("/", passport.authenticate('jwt', {session: false}), productsController.getProducts)

router.get("/:id", productController.getProduct)

router.post("/", productController.createProduct)

router.put("/:id", productController.updateProduct)

router.get('/delete/:id', productController.deleteProduct)

export default router
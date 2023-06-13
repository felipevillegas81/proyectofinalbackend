import { Router } from "express"

import cartsRoutes from "./carts.routes.js"
import productsRoutes from "./products.routes.js"

import viewsRoutes from "./views.routes.js"

import sessionRoutes from "./session.routes.js"

const router = Router()

//Api
router.use("/carts", cartsRoutes)
router.use("/products", productsRoutes)

//Views
router.use('/', viewsRoutes);

//Session
router.use('/session', sessionRoutes)
router.use('/sessions', sessionRoutes)



export default router
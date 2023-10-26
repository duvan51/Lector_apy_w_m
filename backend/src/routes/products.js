import {Router} from "express"

import {
    getUsers,
    getProductsW,
    getAllProducts,
    Hello



}from "../controllers/products"

const router = Router()


//rutas de administracion
router.get("/", Hello)


//rutas de administracion
router.get("/users", getUsers)


//rutas wocommerce
router.get("/wocomerce/products/:productId", getProductsW)
router.get("/wocomerce/products",getAllProducts)

export default router
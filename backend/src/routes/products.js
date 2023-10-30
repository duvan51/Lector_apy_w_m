import {Router} from "express"

import {
    getUsers,
    getProductsW,
    getAllProducts,
    ping,
    createUser



}from "../controllers/products"

const router = Router()


//rutas de administracion
router.get("/ping", ping)


//rutas de administracion
router.get("/users", getUsers)
router.post("/users", createUser)


//rutas wocommerce
router.get("/wocomerce/products/:productId", getProductsW)
router.get("/wocomerce/products",getAllProducts)

export default router
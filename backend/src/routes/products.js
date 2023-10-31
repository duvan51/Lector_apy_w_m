import {Router} from "express"

import {
    getUsers,
    getProductsW,
    getAllProducts,
    ping,
    createUser,
    getUser



}from "../controllers/products"

const router = Router()


//rutas de administracion
router.get("/ping", ping)


//rutas de administracion
router.get("/users", getUsers)
router.get("/users/:id", getUser)
router.post("/users", createUser)


//rutas wocommerce
router.get("/wocomerce/products/:productId", getProductsW)
router.get("/wocomerce/products",getAllProducts)

export default router
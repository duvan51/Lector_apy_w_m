import {connect} from '../database'


// Configuración de la API de WooCommerce
require('dotenv').config();
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const WooCommerce = new WooCommerceRestApi({
  url: 'http://electricosaval.com', // Reemplaza con la URL de tu tienda WooCommerce
  consumerKey: process.env.consumer_key, // Reemplaza con tu clave de consumidor
  consumerSecret: process.env.consumer_secret, // Reemplaza con tu secreto de consumidor
  version: 'wc/v3' // Versión de la API de WooCommerce que deseas utilizar
});


export const Hello = async (req, res) =>{
    res.json("hello world")

}   


export const getUsers = async (req, res) =>{    
    try{
        const connection = await connect();
        const [rows] = await connection.query('SELECT * FROM users')
        res.json(rows)
    }catch (error){
        console.log("error al obtener usuarios", error)
        res.status(500).json({error: "error al obtener usuarios"})
    }
}   

export const getProductsW = async (req, res) =>{
    try {
        const productId = req.params.productId;
        const response = await WooCommerce.get(`products/${productId}`)
        res.json(response.data)
    } catch (error) {
        console.error('Error al obtener detalles del producto:', error);
        res.status(500).json({ error: 'Error al obtener detalles del producto' });
    }
}


export const getAllProducts = async (req, res) => {
    try {
      let page = 1;
      let allProducts = [];
  
      while (true) {
        const response = await WooCommerce.get('products', {
          page,
          per_page: 100, // Ajusta esto según tu necesidad
        });
  
        const products = response.data;
  
        if (products.length === 0) {
          break;
        }
  
        allProducts = [...allProducts, ...products];
        page++;
      }
  
      const simplifiedProducts = allProducts.map((product) => ({
        id: product.id,
        name: product.name,
        sku: product.sku,
        price: product.price,
        regular_price: product.regular_price,
        sale_price: product.sale_price,
        description: product.description,
        permalink: product.permalink,
        attributes: product.attributes,
        categories: product.categories,
        stock_quantity: product.stock_quantity
      }));
  
      res.json(simplifiedProducts);
    } catch (error) {
      console.error('Error al obtener productos:', error);
      res.status(500).json({ error: 'Error al obtener productos' });
    }
  };
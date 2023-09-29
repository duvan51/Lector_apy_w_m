import axios from 'axios'

const URL = "http://localhost:8080"

export const getProducts = async ()=>{
    try{
        const req = await axios.get(`${URL}/wocomerce/products`)
      
        return req.data
        
    }
    catch(err){
        console.error("error al obtener los productos: ", err)
        throw err;
    }
   
}

export const updateProduct = async (productId, productData) => {
    try {
        const req = await axios.put(`${URL}/wocomerce/products/${productId}`, productData);
        return req.data;
    } catch (err) {
        console.error("Error al actualizar el producto: ", err);
        throw err;
    }
};
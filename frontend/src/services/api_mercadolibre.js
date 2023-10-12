import axios from 'axios'

const URL = "http://localhost:8080"

export const MgetProducts = async ()=>{
    try{
        const req = await axios.get(`${URL}/mercadolibre/products`)
        console.log(req.data)
        return req.data
        
    }
    catch(err){
        console.error("error al obtener los productos: ", err)
        throw err;
    }
   
}



export const updateProductM = async (productId, productData) => {
    try {
        const req = await axios.put(`${URL}/mercadolibre/products/${productId}`, productData);
        return req.data;
    } catch (err) {
        console.error("Error al actualizar el producto: ", err);
        throw err;
    }
};


export const deleteProductM = async (productId) => {
    try {
        const req = await axios.delete(`${URL}/mercadolibre/products/${productId}`);
        return req.data;
    } catch (err) {
        console.error("Error al eliminar el producto: ", err);
        throw err;
    }
};
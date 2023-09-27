import axios from 'axios'

const URL = "http://localhost:8080/wocomerce"

export const getProducts = async ()=>{
    try{
        const req = await axios.get(`${URL}/products`)
        return req.data
    }
    catch(err){
        console.error("error al obtener los productos: ", err)
        throw err;
    }
   
}
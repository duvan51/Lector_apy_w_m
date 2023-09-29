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
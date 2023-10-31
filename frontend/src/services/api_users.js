import axios from 'axios'

const URL = "http://localhost:8080"

export const getUsers = async ()=>{
    try{
        const req = await axios.get(`${URL}/users`)
      
        return req.data
        
    }
    catch(err){
        console.error("error al obtener los productos: ", err)
        throw err;
    }
   
}

export const getUser = async (id)=>{
    try{
        const req = await axios.get(`${URL}/users/${id}`)
      
        return req.data
        
    }
    catch(err){
        console.error("error al obtener los productos: ", err)
        throw err;
    }
   
}
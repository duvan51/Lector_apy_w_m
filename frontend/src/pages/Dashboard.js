import React from 'react'
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getUsers, getUser } from '../services/api_users'

const Dashboard = () => {

    const params = useParams();
    const [user, setUser] = useState([]);
    useEffect(()=>{
        getUser(params.id)
       
        .then((res)=>{
          setUser(res);
          
          console.log(res)
        })
        .catch((error)=>{
          console.error('Error al obtener datos de productos:', error);
        })
      
      }, [params.id])


      



  return (
    <div>
      hello: {user.nombre}
      
    </div>
  )
}

export default Dashboard

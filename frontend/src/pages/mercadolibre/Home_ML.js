import React from 'react'
import { MgetProducts, updateProductM } from '../../services/api_mercadolibre';
import { useState, useEffect } from 'react';

import UploadJSONComponent from '../../components/Cargajson'
import DescargarJson from '../../components/DescargarJson'

const Home_ML = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    MgetProducts()
   
    .then((res)=>{
      setData(res)
      console.log(res)
    })
    .catch((error)=>{
      console.error('Error al obtener datos de productos:', error);
    })
  
  }, [])


  const handleSaveClick= () => {
    console.log("producto guardado")// Sale del modo de edición
  };
  const handleCancelClick = () => {
    console.log("producto candelado"); // Sale del modo de edición
  };
  const  handleDeleteClick = () => {
    console.log("producto candelado"); // Sale del modo de edición
  };
  const   handleUpdateClick= () => {
    console.log("producto candelado"); // Sale del modo de edición
  };



  return (
    <div className="App">
    <h1>Data Mercadolibre</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>SKU</th>
          <th>Price</th>
          <th>Categorias</th>
          {/* Agrega aquí otros encabezados de columna si es necesario */}
        </tr>
      </thead>
      <tbody>
      {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.sku}</td>
            <td>{item.price}</td>
            <td>
              <button onClick={handleDeleteClick}>Eliminar</button>
              <button onClick={handleUpdateClick}>Actualizar</button>
            </td>
            {/* Agrega aquí otras columnas si es necesario */}
          </tr>
        ))}
        
      </tbody>
    </table>
    <section>
      <DescargarJson/>
    </section>
    <section>
      <UploadJSONComponent />
    </section>
  </div>
  )
}

export default Home_ML

import React from 'react'
import { MgetProducts, deleteProductM } from '../../services/api_mercadolibre';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import UploadJSONComponent from '../../components/Cargajson'
import DescargarJson from '../../components/DescargarJson'

const Home_ML = () => {

  const [data, setData] = useState([]);
  const [products, setProducts] =useState([]);

  const [editingProductId, setEditingProductId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});

  /* para el buscador */
  const [busqueda, setBusqueda] =useState("")
  
  
  
  
  
  //peticion get de MgetProducts
  useEffect(()=>{
    MgetProducts()
   
    .then((res)=>{
      setData(res)
      console.log(res.available_quantity)
    })
    .catch((error)=>{
      console.error('Error al obtener datos de productos:', error);
    })
  
  }, [])


  const handleSaveClick= () => {
    console.log("producto guardado")// Sale del modo de edición
  };


  //peticion delete para un producto del servidor 
  const handleDeleteClick = (productId) => {
    // Llama a la función deleteProductM para eliminar el producto
    deleteProductM(productId)
      .then(() => {
        // Eliminación exitosa, actualiza la lista de productos en el estado
        const updatedData = data.filter((product) => product.id !== productId);
        setData(updatedData);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Producto ${productId} eliminado`,
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => {
        console.error('Error al eliminar el producto:', error);
      });
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

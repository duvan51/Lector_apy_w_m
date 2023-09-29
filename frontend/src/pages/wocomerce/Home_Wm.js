import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import UploadJSONComponent from '../../components/Cargajson'
import DescargarJson from '../../components/DescargarJson'


import { getProducts } from '../../services/api_wocomerce'



const Home_Wm = ()=> {
 
const [data, setData] = useState([]);

  const [editingProductId, setEditingProductId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});

//peticion get para traer todos los datos y pintarlos 
useEffect(()=>{
  getProducts()
 
  .then((res)=>{
    setData(res)
  })
  .catch((error)=>{
    console.error('Error al obtener datos de productos:', error);
  })

}, [])




 



//peticion delete para eliminar dato
const handleDeleteClick = (productId) => {
  // Realiza una solicitud DELETE al servidor para eliminar el producto
  axios.delete(`http://localhost:8080/wocomerce/products/${productId}`)
    .then((res) => {
      if (res.status === 204) {
        // Eliminación exitosa, actualiza la lista de productos en el estado
        const updatedData = data.filter((product) => product.id !== productId);
        setData(updatedData);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `producto ${productId} eliminado`,
          showConfirmButton: false,
          timer: 1500
        })
        

      } else {
        console.log('No se pudo eliminar el producto, código de estado:', res.status);
      }
    })
    .catch((error) => {
      console.error('Error al eliminar el producto:', error);
    });
};

//peticion update
 // Peticion update
 const handleUpdateClick = (productId) => {
  setEditingProductId(productId);
  // Encuentra el producto editado y configúralo como valor inicial
  const productToEdit = data.find((item) => item.id === productId);
  setEditedProduct(productToEdit);
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  // Actualiza el estado de los datos editados
  setEditedProduct({ ...editedProduct, [name]: value });
};

const handleSaveClick = () => {
  // Realiza una solicitud PUT para guardar los cambios
  axios.put(`http://localhost:8080/wocomerce/products/${editingProductId}`, editedProduct)
    .then((res) => {
      if (res.status === 200) {
        // Actualización exitosa
        setEditingProductId(null); // Sale del modo de edición
        
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Producto ${editingProductId} actualizado`,
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        console.log('No se pudo actualizar el producto, código de estado:', res.status);
      }
    })
    .catch((error) => {
      console.error('Error al actualizar el producto:', error);
    });
};

const handleCancelClick = () => {
  setEditingProductId(null); // Sale del modo de edición
};

return (
  <div className="App">
    <h1>Data Wocomerce</h1>
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
            <td>
              {editingProductId === item.id ? (
                /* Formulario de edición */
                <form>
                  <input
                    type="text"
                    name="name"
                    value={editedProduct.name || ''}
                    onChange={handleInputChange}
                  />
                  {/* Agrega más campos según sea necesario */}
                  <button type="button" onClick={handleSaveClick}>
                    Guardar
                  </button>
                  <button type="button" onClick={handleCancelClick}>
                    Cancelar
                  </button>
                </form>
              ) : (
                /* Datos estáticos */
                item.name
              )}
            </td>
            <td>{item.sku}</td>
            <td>{item.price}</td>
            <td>{item.categories[0].name}</td>
            <td>
              <button onClick={() => handleDeleteClick(item.id)}>Eliminar</button>
              {editingProductId !== item.id && (
                <button onClick={() => handleUpdateClick(item.id)}>Actualizar</button>
              )}
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
);
}


export default Home_Wm;
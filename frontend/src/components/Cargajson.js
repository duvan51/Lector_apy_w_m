import React, { useState } from 'react';

const UploadJSONComponent = () => {
    const [file, setFile] = useState(null);
    const [updateStatus, setUpdateStatus] = useState(''); // Estado para el mensaje de estado de actualización
  
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
    };
  
    const handleUpload = async () => {
      try {
        const formData = new FormData();
        formData.append('json', file);
  
        const response = await fetch('http://localhost:8080/api/upload-json', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          const result = await response.json();
          console.log(result.message);
  
          // Una vez que el JSON se ha cargado con éxito, puedes realizar la actualización
          updateWooCommerceProducts(result.filePath);
        } else {
          console.error('Error al cargar el JSON');
          setUpdateStatus('Error al cargar el JSON');
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        setUpdateStatus('Error al cargar el JSON');
      }
    };
  
    const updateWooCommerceProducts = async (jsonFilePath) => {
      try {
        const response = await fetch(jsonFilePath);
        if (response.ok) {
          const jsonContent = await response.json();
          console.log('Datos del archivo JSON:', jsonContent);
  
          // Recorrer los datos del archivo JSON
    for (const jsonProduct of jsonContent) {
        const productId = jsonProduct.id; // Obtener el ID del producto del archivo JSON
  
        // Realizar una solicitud para obtener el producto correspondiente en WooCommerce
        const existingProductResponse = await fetch(`http://localhost:8080/wocomerce/products/${productId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Agrega cualquier otro encabezado de autenticación o autorización necesario aquí
          },
        });
  
        if (!existingProductResponse.ok) {
          console.error(`Error al obtener el producto con ID ${productId} de WooCommerce`);
          continue; // Continuar con el próximo producto si no se pudo obtener el actual
        }
  
        const existingProductData = await existingProductResponse.json();
  
        // Combinar los datos del producto existente con los datos del archivo JSON
        const updatedProductData = {
          ...existingProductData,
          ...jsonProduct,
        };
  
        // Realizar una solicitud PUT para actualizar el producto en WooCommerce
        const updateProductResponse = await fetch(`http://localhost:8080//wocomerce/products/:productId/${productId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            // Agrega cualquier otro encabezado de autenticación o autorización necesario aquí
          },
          body: JSON.stringify(updatedProductData),
        });
  
        if (updateProductResponse.ok) {
          console.log(`Producto actualizado con éxito: ${productId}`);
        } else {
          console.error(`Error al actualizar el producto con ID ${productId} en WooCommerce`);
        }
      }
  
  
          setUpdateStatus('Productos actualizados con éxito');
        } else {
          console.error('Error al leer el archivo JSON');
          setUpdateStatus('Error al leer el archivo JSON');
        }
      } catch (error) {
        console.error('Error al procesar el archivo JSON:', error);
        setUpdateStatus('Error al procesar el archivo JSON');
      }
    };
  

  return (
    <div>
      <input type="file" accept=".json" onChange={handleFileChange} />
      <button onClick={handleUpload}>Cargar JSON</button>
      <p>{updateStatus}</p> {/* Muestra el estado de la actualización aquí */}
    </div>
  );
};

export default UploadJSONComponent;
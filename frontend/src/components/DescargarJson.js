import React from 'react'
import axios from 'axios';

const DescargarJson = () => {
 
    const descargarJson = () => {
        // Realiza una solicitud GET al servidor para obtener los datos de productos
        axios.get('http://localhost:8080/wocomerce/products')
          .then((res) => {
            if (res.status === 200) {
              //FILTRAR LOS DATOS QUE NECESITO
              const filterData = res.data.map((item)=>({
                id: item.id,
                name: item.name,
                sku: item.sku,
                price: item.price,
                permalink: item.permalink
              }));
              
              
              // Puedes generar un enlace para que el usuario descargue el archivo JSON
              const jsonData = JSON.stringify(filterData, null, 2);
              const blob = new Blob([jsonData], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'archivo.json';
              a.click();
              URL.revokeObjectURL(url);
            } else {
              console.log('No se pudo descargar, código de estado:', res.status);
            }
          })
          .catch((error) => {
            console.error('Error al obtener datos de productos:', error);
          });
        } 
     
 
 
  return (
    <>
      <h1>Descargar JSON</h1>
      <button onClick={descargarJson}>Descargar Datos</button>
    </>
  )
}

export default DescargarJson

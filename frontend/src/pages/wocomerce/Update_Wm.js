import React, {useEffect, useState} from 'react'
import productsData from '../../Actualizando_masa_json/productos.json'; // Importa el JSON con los datos de los productos
import { updateProduct, getProducts } from '../../services/api_wocomerce'


const Update_Wm = () => {
    const [products, setProducts] = useState([]); // Estado para la lista de productos
    const [productsw, setProductsw ] = useState([])


    useEffect(() => {
        getProducts()
          .then(data => {
            // Maneja los datos obtenidos
            setProductsw(data);
          })
          .catch(error => {
            // Maneja los errores
            console.error(error);
          });
    },[])



    const handleUpdate = async () => {
        try {
            // Itera sobre los productos obtenidos de getProducts
            for (const product of productsw) {
                try {
                    // Encuentra el producto correspondiente en productsData por ID
                    const matchingProduct = productsData.find(dataProduct => dataProduct.id === product.id);
                    
    
                    if (matchingProduct) {
                        // Si se encuentra un producto con el mismo ID en productsData, actualízalo
                        const updatedProduct = await updateProduct(matchingProduct.id, matchingProduct);
                        console.log('Producto actualizado:', updatedProduct.sku);
                    } else {
                        console.warn('Producto no encontrado en productsData, se ignora:', product);
                    }
                } catch (error) {
                    console.error('Error al actualizar el producto:', error);
                }
            }
        } catch (error) {
            console.error('Error al actualizar los productos:', error);
        }
    };


    return (
        <div>
            <>
            
            </>
            {/* Agrega un área donde puedes cargar el archivo JSON */}
            <input
                type="file"
                onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                            const jsonData = JSON.parse(event.target.result);
                            setProducts(jsonData);
                        };
                        reader.readAsText(file);
                    }
                }}
            />
            <button onClick={handleUpdate}>Actualizar Productos</button>
                
            <>
            <div className="tableErr">
                <h1>Data Wocomerce</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Actualizados</th>
                            <th>No existen</th>
                            <th>Error</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>actualizado</td>
                            <td>no existen</td>
                            <th>Error</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            </>
        </div>
    );
}

export default Update_Wm

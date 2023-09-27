// En tu componente React
import React, { useState } from 'react';
import axios from 'axios';

function ExcelUploader() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Selecciona un archivo Excel antes de subirlo.');
      return;
    }

    const formData = new FormData();
    formData.append('excelFile', file);

    try {
      // Envía el archivo al servidor
      const response = await axios.post('http://localhost:4000', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        alert('Archivo Excel convertido y guardado exitosamente en una carpeta específica.');
      } else {
        alert('Ocurrió un error al procesar el archivo Excel.');
      }
    } catch (error) {
      console.error('Error al subir el archivo Excel:', error);
      alert('Ocurrió un error al subir el archivo Excel.');
    }
  };

  return (
    <div>
      <h1>Subir Archivo Excel</h1>
      <input type="file" accept=".xlsx" onChange={handleFileChange} />
      <button onClick={handleUpload}>Convertir el archivo</button>
    </div>
  );
}

export default ExcelUploader;

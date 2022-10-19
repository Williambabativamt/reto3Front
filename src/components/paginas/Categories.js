import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Categories = () => {
  const [articulos, setArticulos] = useState([])
      useEffect(() => {
        fetch('http://158.101.4.76:8080/api/Category/all')
          .then((response) => {
            return response.json()
          })
          .then((articulos) => {
            setArticulos(articulos)
          })
      }, [])
       return( 
        <>
           <h1 className="text-3xl font-light mb-4">Categorias</h1>
           <div>
            <table border="1">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                {articulos.map(art => {
                  return (
                    <tr key={art.id}>
                      <td>{art.name}</td>
                      <td>{art.description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
           
         <Link to="/nuevo-categoria" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                Agregar Categoria
            </Link>
        </>
     );
}
 
export default Categories;
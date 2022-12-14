import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import FormularioUsuario from '../ui/FormularioUsuario';

const Usuarios= () => {const [articulos, setArticulos] = useState([])
    useEffect(() => {
      fetch('http://158.101.4.76:8080/api/Client/all')
        .then((response) => {
          return response.json()
        })
        .then((articulos) => {
          setArticulos(articulos)
        })
    }, [])
     return( 
      <>
         <h1 className="text-3xl font-light mb-4">Clientes</h1>
         <div>
          <table border="1">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Edad</th>
              </tr>
            </thead>
            <tbody>
              {articulos.map(art => {
                return (
                  <tr key={art.id}>
                    <td>{art.name}</td>
                    <td>{art.email}</td>
                    <td>{art.age}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
         
       <Link to="/nuevo-usuario" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
              Agregar Cliente
          </Link>
      </>
   );
}
 
export default Usuarios;
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import FormularioUsuario from '../ui/FormularioUsuario';

const Mensajes= () => {const [articulos, setArticulos] = useState([])
    useEffect(() => {
      fetch('http://158.101.4.76:8080/api/Message/all')
        .then((response) => {
          return response.json()
        })
        .then((articulos) => {
          setArticulos(articulos)
        })
    }, [])
     return( 
      <>
         <h1 className="text-3xl font-light mb-4">Mensajes</h1>
         <div>
          <table border="1">
            <thead>
              <tr>
                <th>Mensaje</th>
              </tr>
            </thead>
            <tbody>
              {articulos.map(art => {
                return (
                  <tr key={art.idMessage}>
                    <td>{art.messageText}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
         
       <Link to="/nuevo-mensaje" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
              Agregar Mensaje
          </Link>
      </>
   );
}
 
export default Mensajes;
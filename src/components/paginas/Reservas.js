import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import FormularioUsuario from '../ui/FormularioUsuario';

const Reservas= () => {const [articulos, setArticulos] = useState([])
    useEffect(() => {
      fetch('http://158.101.4.76:8080/api/Reservation/all')
        .then((response) => {
          return response.json()
        })
        .then((articulos) => {
          setArticulos(articulos)
        })
    }, [])
     return( 
      <>
         <h1 className="text-3xl font-light mb-4">Reservas</h1>
         <div>
          <table border="1">
            <thead>
              <tr>
                <th>Fecha inicio</th>
                <th>Fecha fin</th>
                <th>Habitacion</th>
                <th>Cliente</th>
              </tr>
            </thead>
            <tbody>
              {articulos.map(art => {
                return (
                  <tr key={art.id}>
                    <td>{art.startDate.split('T')[0]}</td>
                    <td>{art.devolutionDate.split('T')[0]}</td>
                    <td>{art.room.name}</td>
                    <td>{art.client.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
         
       <Link to="/nuevo-reserva" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
              Agregar Reserva
          </Link>
      </>
   );
}
 
export default Reservas;
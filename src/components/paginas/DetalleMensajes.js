import React, {useState} from 'react';
import { Link, useLinkClickHandler } from 'react-router-dom';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import * as Yup from 'yup';

const DetalleRoom = (   ) => {
    const [rooms, setRooms] = useState([])
    const [articulos, setArticulos] = useState([])
    const [mensaje, guardarMensaje] = useState(null);
 
    useEffect(() => {
     fetch('http://158.101.4.76:8080/api/Room/all')
       .then((response) => {
         return response.json()
       })
       .then((rooms) => {
        setRooms(rooms)
       })
   }, [])

   useEffect(() => {
    fetch('http://158.101.4.76:8080/api/Client/all')
      .then((response) => {
        return response.json()
      })
      .then((articulos) => {
        setArticulos(articulos)
      })
  }, [])

   // Mutation para crear nuevos usuarios en apollo


   const formik = useFormik({
       initialValues: {
           messageText: '',
           room: '1',
           client: '1'
       }, 
       onSubmit: async valores => {
           // console.log(valores);
           const { messageText, room, client} = valores;
           var aux = valores['client']
           valores['client'] = {'idClient': aux}
           var aux = valores['room']
           valores['room'] = {'idRoom': aux}
           fetch('http://158.101.4.76:8080/api/Message/save',{
                method: 'POST',
                body: JSON.stringify(valores),
                headers: new Headers({'content-type': 'application/json'})
           })
       
       }
   })    
   
   
   return( 
        <>
             <h1 className="text-center text-2xl text-white font-light">Login</h1>



<div className="flex justify-center mt-5">
    <div className="w-full max-w-sm">
        <form
            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
            onSubmit={formik.handleSubmit}
        >
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="messageText">
                    Mensaje
                </label>

                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="messageText"
                    type="messageText"
                    placeholder="Mensaje"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="room">
                    Habitacion
                </label>

                <select id="room" name="room" onChange={formik.handleChange}>
                    {rooms.map(room => {
                        return (
                        <option value={room.id}>
                            {room.name}
                        </option>
                        );
                    })}
                
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="client">
                    Cliente
                </label>

                <select id="client" name="client" onChange={formik.handleChange}>
                    {articulos.map(art => {
                        return (
                        <option value={art.idClient}>
                            {art.name}
                        </option>
                        );
                    })}
                
                </select>
            </div>

            <input
                type="submit"
                className="bg-gray-800 w-full mt-5 p-2 text-white uppercas hover:cursor-pointer hover:bg-gray-900"
                value="Guardar"
            />

        </form>
    </div>
</div>
     
        </>
     );
}
 
export default DetalleRoom;
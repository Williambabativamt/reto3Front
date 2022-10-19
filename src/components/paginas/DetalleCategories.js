import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import * as Yup from 'yup';

const DetalleCategories = (   ) => {
   const [mensaje, guardarMensaje] = useState(null);

   // Mutation para crear nuevos usuarios en apollo


   const formik = useFormik({
       initialValues: {
           name: '',
           description: ''
       }, 
       onSubmit: async valores => {
           // console.log(valores);
           const { nombre, hotel, stars, description } = valores;
           fetch('http://158.101.4.76:8080/api/Category/save',{
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Nombre
                </label>

                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="name"
                    placeholder="Nombre"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Descripcion
                </label>

                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    type="description"
                    placeholder="Descripcion"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
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
 
export default DetalleCategories;
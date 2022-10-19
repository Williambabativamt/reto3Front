import React from "react";
import { Routes, Route } from 'react-router';

import Rooms from './components/paginas/Rooms';
import Usuarios from './components/paginas/Usuarios';
import Categories from './components/paginas/Categories';
import Mensajes from './components/paginas/Mensajes';
import Reservas from './components/paginas/Reservas';
import Login from './components/paginas/Login';

import DetalleRoom from "./components/paginas/DetalleRoom";
import DetalleUsuarios from "./components/paginas/DetalleUsuarios";
import DetalleCategories from "./components/paginas/DetalleCategories";
import DetalleMensajes from "./components/paginas/DetalleMensajes";
import DetalleReservas from "./components/paginas/DetalleReservas";


import Sidebar from './components/ui/Sidebar';

function App() {
  return (
    <div className="md:flex min-h-screen" >
      <Sidebar />
      <div className="md:w-2/5 xl:w-4/5 p-6">
      
      <Routes>
                <Route path="/" element={<Login />  } />
                <Route path="/rooms" element={<Rooms />  } />
                <Route path="/categories" element={<Categories />  } />
                <Route path="/usuarios" element={<Usuarios />  } />
                <Route path="/mensajes" element={<Mensajes />  } />
                <Route path="/reservas" element={<Reservas />  } />
                <Route path="/nueva-room" element={<DetalleRoom/> }/>
                <Route path="/nuevo-usuario" element={<DetalleUsuarios/> }/>
                <Route path="/nuevo-categoria" element={<DetalleCategories/> }/>
                <Route path="/nuevo-mensaje" element={<DetalleMensajes/> }/>
                <Route path="/nuevo-reserva" element={<DetalleReservas/> }/>

      </Routes>
    </div>
    </div>
  );
}

export default App;

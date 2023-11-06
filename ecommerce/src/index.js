import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './components/login/login';
import { Logup } from './components/logup/logup';
import ListaProductos from './components/principal/productos';
import { Carrito } from './components/carrito/carrito';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>     
      <Routes>
        <Route path="/" exact element={<App />}/>
        <Route path='login' element={<Login/>}/>
        <Route path='logup' element={<Logup/>}/>
        <Route path='home' element={<ListaProductos/>}/>
        <Route path='carrito' element={<Carrito/>} />
      </Routes>
  </BrowserRouter>
);


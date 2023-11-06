import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './components/login/login';
import { Logup } from './components/logup/logup';
import { Home } from './components/principal/home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>     
      <Routes>
        <Route path="/" exact element={<App />}/>
        <Route path='login' element={<Login/>}/>
        <Route path='logup' element={<Logup/>}/>
        <Route path='home' element={<Home/>}/>
      </Routes>
  </BrowserRouter>
);


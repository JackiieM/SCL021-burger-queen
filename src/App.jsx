import React from 'react';
import { Route, Routes } from "react-router-dom";

// Local imports
import { Home } from './home/Home.jsx'
import { Orders } from './orders/Orders.jsx'
import { Kitchen } from './kitchen/Kitchen.jsx'
import { Ready } from './ready/Ready.jsx';

// ROUTER
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="pedidos" element={<Orders/>} />
        <Route path="cocina" element={<Kitchen/>} />
        <Route path="pedidos/ready" element={<Ready/>} />
      </Routes>
    </>
   
  )
}





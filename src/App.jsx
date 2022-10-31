import React from 'react';
import { Route, Routes } from "react-router-dom";

// Local imports
import { Home } from './home/Home.jsx'
import { Orders } from './orders/Orders.jsx'
import { Kitchen } from './kitchen/Kitchen.jsx'

// ROUTER
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="pedidos" element={<Orders/>} />
        <Route path="cocina" element={<Kitchen/>} />
      </Routes>
    </>
   
  )
}





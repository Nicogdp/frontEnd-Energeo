import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Admin } from '../pages/Admin';
import { Home } from '../pages/Home';
import { Shop } from '../pages/Shop';
import { DetalleProducto } from '../pages/DetalleProducto';
import { Cursos } from '../pages/Cursos';
import AdminRoute from './AdminRoute';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/detalleProducto" element={<DetalleProducto />} />
      <Route path="/cursos" element={<Cursos />} />

       <Route
        path="/administracion"
        element={
          <AdminRoute>
            <Admin />
          </AdminRoute>
        }
      />
    </Routes>
  );
};

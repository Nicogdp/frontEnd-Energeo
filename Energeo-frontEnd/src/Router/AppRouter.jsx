import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Registro } from '../pages/Registro';
import { Login } from '../pages/Login';
import { Admin } from '../pages/Admin';
import { Home } from '../pages/Home';
import { Shop } from '../pages/Shop';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/administracion" element={<Admin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
};

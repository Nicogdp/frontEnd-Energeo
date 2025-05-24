
import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const isAuth = localStorage.getItem('isAuth') === 'true';
  const rol = localStorage.getItem('rol');

  console.log('isAuth:', isAuth);
console.log('rol:', rol);

  if (!isAuth || rol !== 'admin') {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default AdminRoute;

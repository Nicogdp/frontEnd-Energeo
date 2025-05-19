import React from 'react'
import { TablaUsuarios } from '../components/TablaUsuarios'
import { TablaProductos } from '../components/TablaProductos'

export const Admin = () => {
  return (
    <> 
    <h1>Tabla usuarios</h1>
      <TablaUsuarios/>
    <h1>Tabla Productos</h1>
      <TablaProductos/>
        

    
    
    </>  
  )
}

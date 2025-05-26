import React from 'react';
import { TablaUsuarios } from '../components/TablaUsuarios';
import { TablaProductos } from '../components/TablaProductos';
import { Container, Tabs, Tab } from 'react-bootstrap';
import '../style/admin.css';

export const Admin = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Panel de Administración</h2>
      <Tabs defaultActiveKey="usuarios" id="admin-tabs" className="mb-3" fill>
        <Tab eventKey="usuarios" title="Usuarios">
          <div className="tabla-scroll">
            <TablaUsuarios />
          </div>
        </Tab>
        <Tab eventKey="productos" title="Productos">
          <div className="tabla-scroll">
            <TablaProductos />
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
};

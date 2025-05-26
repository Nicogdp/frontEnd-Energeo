import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css'
import { AppNavbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AppRouter } from './Router/AppRouter';


function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <AppRouter />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

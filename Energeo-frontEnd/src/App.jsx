import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './Router/appRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppNavbar } from './components/Navbar';
import { Footer } from './components/Footer';


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

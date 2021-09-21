import React  from 'react';
import './App.css';
import Nav from './Componentes/Nav/Nav.jsx'
import Header  from './Componentes/Header/Header';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import Footer from './Componentes/Footer/Footer';


function App() {


  return (
    <>
      <Nav className='Nav'/>      
      <Header titulo='Muy Pronto' subtitulo='algo muy copado esta viniendo..' className='Header'/>
      <ItemListContainer greeting='BIENVENIDE' className='Container'/>
      <Footer className='Footer'/>
    </>
  );
}

export default App;

import React  from 'react';
import './App.css';
import Nav from './Componentes/Nav/Nav.jsx'
import Header  from './Componentes/Header/Header';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import Footer from './Componentes/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <ItemListContainer greeting='BIENVENIDE'/>
      <Header titulo='Muy Pronto' subtitulo='500.000' />
        <p>
          holis
        </p>
        <Footer />
    </div>
  );
}

export default App;

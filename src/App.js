import React  from 'react';
import './App.css';
import Nav from './Componentes/Nav/Nav.jsx'
import Header  from './Componentes/Header/Header';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import Footer from './Componentes/Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import carrito from './Componentes/carrito/carrito';
function App() {


  return (
    <> 
      <BrowserRouter> 
        <Nav className='Nav'/> 
        <Header titulo='Muy Pronto' subtitulo='algo muy copado esta viniendo..' className='Header'/>

        <Switch>
        <Route path='/' component={ItemListContainer} exact/>
        <Route path='/productos' component={ItemDetailContainer} exact/>
        <Route path='/carrito' component={carrito}/>
        <Route path={`/item/${producto.id}`} exact component={ItemDetailContainer} />
        </Switch>    
        <Footer className='Footer'/>
        </BrowserRouter>
    </>
  );
}

export default App;

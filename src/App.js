import React  from 'react';
import './App.css';
import Nav from './Componentes/Nav/Nav.jsx'
import Header  from './Componentes/Header/Header';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import Footer from './Componentes/Footer/Footer';
import CartWidget from './Componentes/CartWidget/CartWidget'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
function App() {


  return (
    <> 
      <BrowserRouter> 
        <Nav className='Nav'/> 

        <Switch>
        <Route path='/' component={ItemListContainer} exact/>
        <Route path='/productos' component={Nav} />
        <Route path='/cart' component={CartWidget} />
        </Switch>    

        <Header titulo='Muy Pronto' subtitulo='algo muy copado esta viniendo..' className='Header'/>
        <ItemDetailContainer />
        <Footer className='Footer'/>
        </BrowserRouter>
    </>
  );
}

export default App;

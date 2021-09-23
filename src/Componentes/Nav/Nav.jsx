import React from 'react';
import './nav.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'
const Nav=() => {
    return(
        <div className='topnav'>  

        <Link to="/">Inicio</Link>
    

        <Link to="/productos">Productos</Link>
    
        <Link to="/contacto">Contacto</Link>
        <CartWidget className='logo' /> 
        </div>
    )
}

export default Nav;
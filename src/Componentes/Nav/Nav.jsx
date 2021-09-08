import React from 'react';
import './nav.css';
import CartWidget from '../CartWidget/CartWidget';
const Nav=() => {
    return(
        <nav className='topnav'>   
        <a href="#">Inicio</a>
        <a href="#">Contacto</a>
        <a href="#">Quienes somos</a>
        <CartWidget className='logo' /> 
        </nav>
    )
}

export default Nav;
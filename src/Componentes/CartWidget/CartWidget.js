import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import './icono.css'

const CartWidget = () => {
    return (
        <div className='icono'>
            <Link to='/carrito'>
            <Icon name='cart arrow down' size='huge' />
            <span className='number'>0</span>
            </Link>
        </div>
    )
}

export default CartWidget

import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Icon } from 'semantic-ui-react';
import './icono.css'

const CartWidget = () => {
    return (
        <div className='icono'>
            <Icon name='cart arrow down' size='huge' />
            <span className='number'>0</span>
            
        </div>
    )
}

export default CartWidget

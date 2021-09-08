import React from 'react'
import './Header.css'
const Header = ({titulo, subtitulo})=> {

        return (
            <header className='cabeza'>
                <h1>{titulo}</h1>
                <p>{subtitulo}</p>
            </header>
        )
    
}

export default Header

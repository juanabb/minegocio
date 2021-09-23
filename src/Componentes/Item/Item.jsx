import React from "react"
import './Item.css'
const Item = ({producto}) => {
    return (
        <div className='vista'>
            <img className='img' src={producto.img} alt="producto" />
            <h1>{producto.titulo}</h1>
            <p>{producto.precio}</p>
        </div>
    )
}

export default Item

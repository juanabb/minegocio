import React from "react"
import './Item.css'
import { Link } from "react-router-dom"

const Item = ({producto}) => {
    return (
        <div className='vista' >
            <h1>{producto.titulo}</h1>
            <h3>{producto.precio}</h3>
            <Link to={`/item/${producto.id}`}>
            <img className='img' src={producto.img} alt="producto" />
            </Link >
        </div>
    )
}

export default Item

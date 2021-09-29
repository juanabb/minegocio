import React from "react"
import './Item.css'
import { Link } from "react-router-dom"

const Item = ({producto}) => {
    return (
        <div className='vista' >
            <span>{producto.id}</span>
            <h1>{producto.titulo}</h1>
            <Link to={`/item/${producto.id}`}>
            <img className='img' src={producto.img} alt="producto" />
            </Link >
        </div>
    )
}

export default Item

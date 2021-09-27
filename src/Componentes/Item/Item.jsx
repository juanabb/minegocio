import React from "react"
import './Item.css'
import { Link } from "react-router-dom"

const Item = ({producto}) => {
    return (<Link to='/producto'  >
        <div className='vista'>
            <h1>{producto.titulo}</h1>

            <img className='img' src={producto.img} alt="producto" />
        </div>
        </Link>
    )
}

export default Item

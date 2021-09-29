import React from 'react'
import { useParams } from 'react-router'
import ItemCount from '../ ItemCount/ ItemCount';
import { getProductosById } from "../../utils/getProductosById";


const Producto = () => {
    const {id} = useParams()
    const prod=getProductosById(id)
    return (
        <div>
            <img src={prod.img} alt="" />
            <h1>numero={prod.id}</h1>
            <p>{prod.titulo}</p>
            <p>{prod.description}</p>
            <p>{prod.precio}</p>
            <ItemCount stock={prod.stock} initial={1}/>
        </div>
    )
}

export default Producto

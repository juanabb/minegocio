import React from 'react'
import { useParams } from 'react-router'
import ItemCount from '../ ItemCount/ ItemCount';
import { getProductosById } from "../../utils/getProductosById";
import { Link } from "react-router-dom"

const Producto = () => {
    const {id} = useParams()
    const prod=getProductosById(id)
    let path = '/';
    return (
        <div>
            <img src={prod.img} alt="" />
            <h2>{prod.titulo}</h2>
            <p>{prod.description}</p>
            <p>{prod.precio}</p>
            <ItemCount stock={prod.stock} initial={1}/>
            <Link className="btn btn-success mt-3" to={path}>Volver</Link>
        </div>
    )
}

export default Producto

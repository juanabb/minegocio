import React from 'react'
import { useParams } from 'react-router'
import { getProductosById } from "../../utils/getProductosById";

const producto = () => {
    const {id} = useParams()
    const prod=getProductosById(id)
    return (
        <div>
            <h1>numero={prod.id}</h1>
            <p>{prod.titulo}</p>
        </div>
    )
}

export default producto

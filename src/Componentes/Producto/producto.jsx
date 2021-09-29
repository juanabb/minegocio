import React from 'react'
import { useParams } from 'react-router'

const producto = () => {
    const {id} = useParams()
    const producto = getProductosById(id)

    return (
        <div>
            <h1>{producto.titulo}</h1>

        </div>
    )
}

export default producto

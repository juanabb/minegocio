import React from "react"

const Item = ({producto}) => {
    return (
        <div>
            <h1>{producto.titulo}</h1>
            <p>{producto.precio}</p>
        </div>
    )
}

export default Item

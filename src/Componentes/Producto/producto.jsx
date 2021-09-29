import React from 'react'
import { useParams } from 'react-router'


const producto = ({productos}) => {
    const {id} = useParams
    return (
        <div>
            <h1>numero={id}</h1>
            <p>{productos}</p>

        </div>
    )
}

export default producto

import {useState} from 'react'
import React from 'react'

const  ItemCount = ({ stock, initial,  onAdd }) => {
    
    const [counter, setCounter]= useState(initial)


    let sumar = () =>{
        if (counter<stock){
            setCounter(counter+1)
        }
    }
    let restar = ()=> {
        if(counter>initial){
            setCounter(counter-1)
        }
    }
    return (
        <>
        <div>
            <p>cantidad :{counter}</p>
            <button onClick={restar}>menos</button>
            <button onClick={sumar}>mas</button>
            </div>
            <button>agregar al carritor</button>
        </>
    )
}

export default  ItemCount

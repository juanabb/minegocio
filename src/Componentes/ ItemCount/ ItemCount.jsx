import {useState} from 'react'
import React from 'react'
import { Button } from 'semantic-ui-react'

const  ItemCount = ({ stock, initial,  onAdd }) => {
    
    const [counter, setCounter]= useState(initial)

    let sumar = () =>{
        if (counter<stock){
            setCounter(counter+1)
        }
        else alert('no hay mas che')
    }
    let restar = ()=> {
        if(counter>initial){
            setCounter(counter-1)
        }
        else alert('no hay menos che')

    }
    return (
        <>
        <div>
            <p>cantidad :{counter}</p>
            <Button onClick={restar} basic color='red'>-</Button>
            <Button onClick={sumar} basic color='green'>+</Button>
            </div>
            <Button basic color='blue'>agregar al carritor</Button>
        </>
    )
}

export default  ItemCount

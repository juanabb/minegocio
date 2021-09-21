import {useState} from 'react'
import React from 'react'
import { Button, Icon} from 'semantic-ui-react'

const  ItemCount = ({stock, initial, onAdd}) => {
    const [counter, setCounter]= useState(initial)
  
    let handlesumar = () =>{
        if (counter<stock){
            setCounter(counter+1)
        }
        else alert('No hay mas en stock')
    }
    let handlerestar = ()=> {
        if(counter>0){
            setCounter(counter-1)
        }
        else alert('No puede ser negativo')
  
    }
  
  
    const handleAdd = () => {
      setCounter(0);
      if(counter>=1){
      alert('Ya lo tienes en el carrito!')
    }
      
    };
  

    return (
        <>
        <div>
            <p>cantidad :{counter}</p>
            <Icon onClick={handlerestar} color ='red' name='minus' size='large'/>
            <Icon onClick={handlesumar} color ='green' name='plus' size='large'/>
            </div>
            <Button basic color='blue' onClick={handleAdd}>Quiero!</Button>
        </>
    )
}

export default  ItemCount

import React from 'react'
import { useEffect, useState } from 'react';
import ItemList from '../itemList/itemList';

const productosIniciales=[
{id:'1', titulo: 'primero' , precio: '$100'},
{id:'2', titulo: 'segundo' , precio: '$85'},
{id:'3', titulo: 'tercero' , precio: '$69'}
]

const ItemListContainer = ({greeting}) => {

    const [productos, setProductos]= useState ([ ])
    
    useEffect(()=>{
      const mock_async = new Promise ((res)=>{
        setTimeout(()=>{
          res(productosIniciales)
        },2000)
      })
      mock_async 
                .then((resultado)=>{ setProductos(resultado)

                })
    })
    
    if(productos.length > 0){
    return (
        <div>
          <h1>{greeting}</h1>    
            <ItemList productos={productos}/>
        </div>
    )
  } else{
    return(<><p>cargando...</p></>)
  }
}

export default ItemListContainer

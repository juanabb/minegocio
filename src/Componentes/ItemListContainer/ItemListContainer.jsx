import React from 'react'
import { useEffect, useState } from 'react';
import ItemList from '../itemList/itemList';
import './ItemListContainer.css'
import {productosIniciales} from '../catalogo/catalogo'


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
        <div className='container mt-3'>
          <h1 className='titulo'>{greeting}</h1>    
            <ItemList productos={productos}/>
        </div>
    )
  } else{
    return(<><p>cargando...</p></>)
  }
}

export default ItemListContainer

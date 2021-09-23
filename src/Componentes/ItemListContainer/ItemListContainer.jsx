import React from 'react'
import { useEffect, useState } from 'react';
import ItemList from '../itemList/itemList';
import './ItemListContainer.css'

const productosIniciales=[
{id:'1', titulo: 'primero' , precio: '$100',img:'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/time-infinity-stone-poster-style-1-cole-iba.jpg'},
{id:'2', titulo: 'segundo' , precio: '$85',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKxt0UzBXkRH3Qk5nx-gtK0LwL7gYhofGiE1yGZs_vTYN5vMaEoLsAMcCYFq8q4byAm8&usqp=CAU'},
{id:'3', titulo: 'tercero' , precio: '$69', img: 'https://www.fabreminerals.com/specimens/s_imagesL1/TC64L1.jpg?big=1'}
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
        <div className='muestrario'>
          <h1 className='titulo'>{greeting}</h1>    
            <ItemList productos={productos}/>
        </div>
    )
  } else{
    return(<><p>cargando...</p></>)
  }
}

export default ItemListContainer

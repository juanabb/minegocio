import React from 'react'
import { useEffect, useState } from 'react';
import ItemList from '../itemList/itemList';
import './ItemListContainer.css'

const productosIniciales=[
{id:'1', titulo: 'Esfera Verde', description:"Mineral Natural" ,stock: '10' ,precio: '$550',img:'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/time-infinity-stone-poster-style-1-cole-iba.jpg'},
{id:'2', titulo: 'Cuadro Universa', description:"Data del 500 D.C.",stock: '10', precio: '$666',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKxt0UzBXkRH3Qk5nx-gtK0LwL7gYhofGiE1yGZs_vTYN5vMaEoLsAMcCYFq8q4byAm8&usqp=CAU'},
{id:'3', titulo: 'Mineral', description:"Mineral" ,stock: '10', precio: '$899', img: 'https://www.fabreminerals.com/specimens/s_imagesL1/TC64L1.jpg?big=1'},
{id:'4', titulo: 'Extracto Egipcio', description:"Data del 2200 A.C.",stock: '10', precio: '$899',img:'https://mascotafiel.com/wp-content/uploads/2016/08/los-gatos-en-el-antiguo-egipto.jpg'},
{id:'5', titulo: 'Fuego', description:"Tenica Desconocida" ,stock: '10', precio: '$480', img: 'https://pm1.narvii.com/7411/7595dab5c73633cfa02deb20c4321e2dac6ac96br1-259-207v2_hq.jpg'},]

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

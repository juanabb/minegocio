import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {


  
    return (
        <>
        <div className='container'>
        <div className='row'>
        <div classname='col-sm-3'>
            <ItemDetail name='Fuego' 
      price='$480' 
      description="Tenica Desconocida"
      stock= '10'
      initial='1'
      img='https://pm1.narvii.com/7411/7595dab5c73633cfa02deb20c4321e2dac6ac96br1-259-207v2_hq.jpg'/>
      </div>
      <div classname='col-sm-3'>
      
      <ItemDetail name="Extracto Egipcio" 
      price="$899" 
      description="Data del 2200 A.C."
      stock= '10'
      initial ='1'
      img="https://mascotafiel.com/wp-content/uploads/2016/08/los-gatos-en-el-antiguo-egipto.jpg"/>

        </div>
        <div classname='col-sm-3'>
      <ItemDetail name="Esfera Verde" 
      price="$550" 
      description="Mineral Natural"
      stock= '10'
      initial ='1'
      img="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/time-infinity-stone-poster-style-1-cole-iba.jpg"/>

        </div>
        <div classname='col-sm-3'>
      <ItemDetail name="Mineral" 
      price="$999" 
      description="Mineral"
      stock= '10'
      initial ='1'
      img="https://www.fabreminerals.com/specimens/s_imagesL1/TC64L1.jpg?big=1"/>

        </div>
        <div classname='col-sm-3'>
      <ItemDetail name="Cuadro Universa" 
      price="$666" 
      description="Data del 500 D.C."
      stock= '10'
      initial ='1'
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKxt0UzBXkRH3Qk5nx-gtK0LwL7gYhofGiE1yGZs_vTYN5vMaEoLsAMcCYFq8q4byAm8&usqp=CAU"/>
        </div>
        </div>
        </div>
        </>
    )
}

export default ItemDetailContainer

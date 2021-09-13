import React from 'react'
import ItemCount from '../ ItemCount/ ItemCount';

const ItemListContainer = ({greeting}) => {
    return (
        <div>
          <h1>{greeting}</h1>    


        <ItemCount stock={4} initial={1}/>
        <ItemCount stock={3} initial={1}/>
        <ItemCount stock={2} initial={1}/>
            
        </div>
    )
}

export default ItemListContainer

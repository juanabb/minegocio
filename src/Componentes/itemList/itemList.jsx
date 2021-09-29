import React from "react";
import Item from "../Item/Item";
const ItemList = ({productos}) => {
    
  return (
    <ul>
       {productos.map((producto,indice)=>{
           return <Item id={producto.id} producto={producto} />
       })} 
        </ul>
  );
  
};

export default ItemList

import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../ ItemCount/ ItemCount'

const ItemDetail = ({name, price, img, description, initial, stock}) => {
    return (
        <div>
           <Card>
    <Image src={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>{price}</span>
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <ItemCount stock ={stock} initial={initial}/>

    </Card.Content> 
  </Card> 
        </div>
    )
}

export default ItemDetail

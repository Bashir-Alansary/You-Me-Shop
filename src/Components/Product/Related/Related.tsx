import React, { FC } from 'react'
import { Item } from '../../Item/Item'
import products from '../../Assets/globalData/products'

interface Props {
  id: number,
  category: string,
}

const Related:FC<Props> = ({id, category}) => {

  const relatedItems = products.filter(item => item.category === category && item.id !== id );

  return (
    <div className='product-related flx'>
        {
            relatedItems.map((item, i) => {
              if (i < 4) {
                return(
                  <Item key={item.id} {...item} itemClass={'item'}/>
                )
              }
            })
        }
    </div>
  )
}

export default Related;
import React, { FC, useState } from 'react'
import { ProductType } from '../../Assets/types';
import Reviews from './Reviews/Reviews';
import Description from './Description';
import MoreInfo from './MoreInfo';
import "./ProductAbout.scss"

interface Part {
  id: number;
  name: string;
  comp: JSX.Element;
}

interface Props {
  product: ProductType,
}

const ProductAbout:FC<Props> = ({product}) => {

  const parties = [
    {
        id:1,
        name: "description",
        comp: <Description desc = {product.desc} />
    },
    {
        id:2,
        name: "info",
        comp: <MoreInfo info = {product.info} />
    },
    {
        id:3,
        name: "reviews",
        comp: <Reviews />
    }
]

  const [part, setPart] = useState<Part>(parties[0]);
  const [activeId, setActiveId] = useState<number>(part.id);

  const filterParties = (id:number): void => {
    const newPart:Part | undefined = parties.find(part => part.id === id);
    if (newPart !== undefined) {
      setPart(newPart);
    }
    setActiveId(id);
  }

  return (
    <div className='product-about'>
      <ul className='parties'>
        {
          parties.map(part => {
            const {id, name} = part;
            return(
              <li className='part' key={id}>
                <button className={id === activeId? 'active-part' : ''} onClick={()=>{filterParties(id)}}>{name}</button>
              </li>
            )
          })
        }
      </ul>
      <div className='part-content'>
        {part.comp}
      </div>
    </div>
  )
}

export default ProductAbout;

import React, { FC, useEffect, useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./DropdownMenu.scss";
import { ProductType, SortShownType, SortShownVal } from '../../Assets/types';

interface Props {
  data: SortShownType[],
  dropAction: (val: SortShownVal, list?: ProductType[]) => void,
  categoryData: ProductType[],
}

const DropdownMenu:FC<Props> = ({data, dropAction, categoryData}) => {

  // const {currentCategory} = useShopContext();
  const[chosenName, setChosenName] = useState(data[0].name);
  const [isChevronUp, setIsChevronUp] = useState(false);
  
  const handleToggleBtn = (): void => {
    setIsChevronUp(!isChevronUp);
  }

  const handleDropItemBtn = (val: SortShownVal, name: string) => {
    dropAction(val);
    setChosenName(name);
    setIsChevronUp(false);
  }

  useEffect(() => {
    setChosenName(data[0].name);
    setIsChevronUp(false);
  }, categoryData)

  return (
    <div className='drop-menu'>
      <button 
      className='toggle-btn'
      onClick={handleToggleBtn}
      >
        <span className='val'>{chosenName}</span>
        <span className='chevron flx-c'>{isChevronUp ? <FaChevronUp color='rebeccapurple'/> : <FaChevronDown/> }</span>
      </button>
      <ul className={isChevronUp ? 'drop-items show' : 'drop-items hide'}>
        {
          data.map(item => {
            const{id, name, value} = item;
            return (
              <button 
              key={id}
              className = "drop-item"
              onClick={()=>handleDropItemBtn(value, name)}
              >
                {name}
              </button>
            )
          })
        }
      </ul>
    </div>
  )
}

export default DropdownMenu;
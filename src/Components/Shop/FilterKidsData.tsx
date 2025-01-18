import React, {FC, useState} from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FilterProps } from '../Assets/types';

const FilterKidsData:FC<FilterProps> = ({filterColors, filterTypes, categoryData}) => {
    const colors = [...Array.from(new Set(categoryData.map(item => item.color)))];
    const types = [...Array.from(new Set(categoryData.map(item => item.type)))];
    const [toggleColor, setToggleColor] = useState(false);
    const [toggleTypes, setToggleTypes] = useState(false);
    return (
        <>
        <div className='category'>
            <h3 className='hide-mobile'>colors</h3>
            <button className='hide-pc' onClick={() => setToggleColor(!toggleColor)}>
                <h3>colors</h3>
                {toggleColor ? <span><FaChevronUp /></span>
                : <span><FaChevronDown /></span> }
            </button>
            <ul className={toggleColor? 'colors show' : 'colors hide'}>
                {
                    colors.map((color, i)=> {
                        return (
                            <li key={i} className='color'>
                                <input
                                type="checkbox" 
                                id={color} 
                                value={color} 
                                onChange={filterColors} 
                                />
                                <label htmlFor={color}>{color}</label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        <div className='category'>
            <h3 className='hide-mobile'>products types</h3>
            <button className='hide-pc' onClick={() => setToggleTypes(!toggleTypes)}>
                <h3>products types</h3>
                {toggleTypes ? <span><FaChevronUp /></span>
                : <span><FaChevronDown /></span> }
            </button>
            <ul className={toggleTypes? 'product-types show' : 'product-types hide'}>
                {
                    types.map((type, i)=> {
                        return (
                            <li key={i} className='product-type'>
                                <input 
                                type="checkbox" 
                                id={type} 
                                value={type} 
                                onChange={filterTypes} 
                                />
                                <label htmlFor={type}>{type}</label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        </>
  )
}

export default FilterKidsData;
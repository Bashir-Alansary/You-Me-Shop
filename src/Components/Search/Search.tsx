import React, { useState } from 'react'
import Banner from "../Banner/Banner"
import searchBanner from "../Assets/images/search_banner.png"
import products from '../Assets/globalData/products';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { ProductType } from '../Assets/types';
import { setSearchInputVal } from '../Redux/Slices/globalSlice';
import { Item } from '../Item/Item';
import "./Search.scss"

const Search = () => {
    
    const {searchInputVal} = useSelector((state:RootState) => state.global);
    const dispatch = useDispatch();
    
    const items: ProductType[] | boolean = searchInputVal !== "" && products.filter(item => item.name.toLowerCase().includes(searchInputVal.toLowerCase()));
    const [inputVal, setInputVal] = useState<string>(searchInputVal);

  return (
    <div className='search'>
        <Banner 
        title={searchInputVal !== "" ? 'search for "' + searchInputVal + '"' : 'search'} 
        img = {searchBanner}
        num = {items ? items.length : 0} 
        />
        <div className='container'>
            <div className='content'>
                <div className='input-content'>
                    <input 
                    type="search" 
                    placeholder='what are you looking for?' 
                    value = {inputVal} 
                    onChange={(e)=>setInputVal(e.target.value)}
                    />
                    <button className='search-btn' onClick={()=>dispatch(setSearchInputVal(inputVal))}>Search</button>
                </div>
                <div className='result'>
                    <div className='content'>
                        {searchInputVal !== "" ?
                            items && items.map(item => {
                                return (
                                    <Item key={item.id} {...item} itemClass={'item'}/>
                                )
                            })
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search;

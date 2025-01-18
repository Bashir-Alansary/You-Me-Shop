import React, { FC, SetStateAction, useState } from 'react'
import {Link} from 'react-router-dom';
import "./SubSearch.scss"
import {FiSearch } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import products from '../Assets/globalData/products';
import { Item } from '../Item/Item';
import { InputEventType, ProductType } from '../Assets/types';
import { useDispatch } from 'react-redux';
import { setSearchInputVal } from '../Redux/Slices/globalSlice';

interface Props {
  showSearch: boolean,
  setShowSearch: React.Dispatch<SetStateAction<boolean>>
}

const SubSearch:FC<Props> = ({showSearch, setShowSearch}) => {

  const [inputVal, setInputVal] = useState<string>("");
  const[searchItems, setSearchItems] = useState<ProductType[]>([]);
  const dispatch = useDispatch();

  const handleSearchInput = (e: InputEventType) => {
    const {value} = e.target;
    setInputVal(value);
    if (value !== "") {
      const items = products.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
      setSearchItems(items);
    } else {
      setSearchItems([]);
    }
  }

  const handleCloseBtn = (): void => {
    setShowSearch(false);
    dispatch(setSearchInputVal(inputVal));
    setInputVal("");
    setSearchItems([]);
  }

  return (
    <div className={showSearch? 'sub-search show' : 'sub-search hide'}>
      <div className='content'>
        <div className='search-content'>
          <div className='input-content'>
            <input 
            type="search" 
            placeholder='what are you looking for?' 
            onChange={handleSearchInput} 
            value = {inputVal}
            />
            <Link 
            className="link" 
            to="/search" 
            onClick={(handleCloseBtn)}
            >
              <FiSearch className='search-icon icon' />
            </Link>
          </div> 
          {inputVal !== "" ? <div className='result'>
            {searchItems.length ?
              <>
              <h6 className='title'>products</h6>
              <ul className='search-items'>
                {
                  searchItems.map((item, i) => {
                    const {id} = item;
                    return (
                      <>
                        {i < 4 ?
                        <li key = {id} >
                          <Link className='link' to={"/product/"+ id} onClick={handleCloseBtn}>
                            <Item {...item} itemClass={"search-view"}/>
                          </Link>
                        </li>
                        : null
                        }
                      </>
                    )
                  })
                }
              </ul>
              </>
              : <p className='no-result'>no items search for <span>"{inputVal}"</span></p>
            }
          </div>
          : null 
          }
        </div>
        <button className='close' onClick={handleCloseBtn}><IoCloseSharp className='close-icon icon' /></button>
      </div>
    </div>
  )
}

export default SubSearch;
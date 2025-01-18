import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../Redux/Slices/cartSlice';
import { addToWish } from '../Redux/Slices/wishSlice';
import { DiGitCompare } from "react-icons/di";
import { FiHeart } from "react-icons/fi";
import { FaHeart, FaDollarSign } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import { AiOutlineReload } from "react-icons/ai";
import { SmallImgType } from '../Assets/types';
import { isItemExist } from '../Assets/globalFunctions';
import "./Item.scss";
import { RootState } from '../Redux/store';
import { addToCompare } from '../Redux/Slices/compareSlice';
import { setShowSubcart } from '../Redux/Slices/globalSlice';

interface Props {
    id: number,
    name: string,
    smallImgs: SmallImgType[],
    newPrice: number,
    oldPrice: number,
    desc: string,
    itemClass: string,
}

export const Item:FC<Props> = ({id, name, smallImgs, newPrice, oldPrice, desc, itemClass}) => {

  const {wishItems}= useSelector((state:RootState) => state.wish);
  const {compareItems}= useSelector((state:RootState) => state.compare);
  const dispatch = useDispatch();

  const[wishLoad, setWishLoad] = useState<boolean>(false);
  const[compareLoad, setCompareLoad] = useState<boolean>(false);
  const[addLoad, setAddLoad] = useState<boolean>(false);
  const [shownImg, setShownImg] = useState<SmallImgType>(smallImgs[0]);


  const linkClick = () => {
    window.scrollTo(0,0);
  }

  const handleAddToWish = (id: number): void => {
    setWishLoad(true);
    setTimeout(function() {
      dispatch(addToWish(id));
      setWishLoad(false);
    }, 500);
  }

  const handleAddToCompare = (id: number): void => {
    setCompareLoad(true);
    setTimeout(function() {
      dispatch(addToCompare(id));
      setCompareLoad(false);
    }, 500);
  }

  const handleAddToCart = (id: number): void => {
    setAddLoad(true);
    setTimeout(function() {
      dispatch(addToCart({id, color: shownImg}));
      dispatch(setShowSubcart(true));
      setAddLoad(false);
    }, 500);
  }

  // useState(()=> {
  //   setShownImg(smallImgs[0].img);
  // }, []);

  return (
    <div className={itemClass}>
      <div className='item-div'>
        <div className='content'>
          <Link className='imgbx link' to={"/product/"+ id} onClick={linkClick}>
            <img src={shownImg.img} />
          </Link>
          <div className='item-details'>
            <div className='text'>
              <Link className='link' to={"/product/"+ id} onClick={linkClick}>
                <h3>{name}</h3>
              </Link>
              <div className='price'>
                <span className='new-price'>${newPrice}</span>
                <span className='old-price'>${oldPrice}</span>
              </div>
              <p className='description'>{desc}</p>
              <ul className='item-colors'>
                {
                  smallImgs.map(item => {
                    const {id, color} = item;
                    return (
                      <li key={id} className='item-color'>
                        <button
                        className={shownImg.id === id ? 'color-btn active' : 'color-btn'}
                        style={{background: color, outline: '1px solid' + color}}
                        onClick={()=>setShownImg(item)}
                        ></button>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className='interact'>
              <div className='item-icons compare-btn'>
                <span className='icon-name'>
                  {isItemExist(id, compareItems)? "it is in compare" : "Add to compare"}
                </span>
                {isItemExist(id, compareItems)? <Link to="/compare" className="link icon-btn flx-c"><MdDoneOutline/> </Link>
                :<button onClick={()=>handleAddToCompare(id)} className='icon-btn flx-c'>
                  {compareLoad? <AiOutlineReload className='load'/> : <DiGitCompare />}
                </button>}
              </div>
              <div className='item-icons wishlist-btn'>
                <span className='icon-name'>
                  {isItemExist(id, wishItems)? "it is in wishlist" : "Add to wishlist"}
                </span>
                {isItemExist(id, wishItems)? <Link to="/wishlist" className="link icon-btn flx-c"><FaHeart /> </Link>
                :<button onClick={()=>handleAddToWish(id)} className='icon-btn flx-c'>
                  {wishLoad? <AiOutlineReload className='load'/> : <FiHeart />}
                </button>}
              </div>
            </div>

            <div className="main-btn">
              <button 
              className={addLoad ?  'special-btn disabled' : 'special-btn' }
              disabled = {addLoad? true : false} 
              onClick={()=>handleAddToCart(id)}
              >
              {addLoad ? <AiOutlineReload className='load' /> : 'Add to cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React, {FC, useState} from 'react'
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { Link } from 'react-router-dom'
import { DiGitCompare } from "react-icons/di";
import { FiHeart, FiShare2 } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import { AiOutlineReload } from "react-icons/ai";
import paymentMethods from './data';
import { CartNewKeys, ProductType, SmallImgType } from '../../Assets/types';
import { isItemExist } from '../../Assets/globalFunctions';
import { useDispatch, useSelector } from 'react-redux';
import { addToWish } from '../../Redux/Slices/wishSlice';
import { RootState } from '../../Redux/store';
import { addToCompare } from '../../Redux/Slices/compareSlice';
import { addAmountToItem } from '../../Redux/Slices/cartSlice';
import "./Details.scss"
import { setCheckouItem } from '../../Redux/Slices/globalSlice';

interface Props {
  product: ProductType,
}

const Details:FC<Props> = ({product}) => {
  
  const {id, name, smallImgs, category, desc, newPrice, oldPrice, sizes} = product;
  const {wishItems} = useSelector((state:RootState) => state.wish)
  const {compareItems} = useSelector((state:RootState) => state.compare)
  const {checkoutPath} = useSelector((state:RootState) => state.global);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState<number>(1);
  const [size, setSize] = useState<string>(product.sizes[0]);
  const [color, setColor] = useState<SmallImgType>(smallImgs[0]);

  const[wishLoad, setWishLoad] = useState<boolean>(false);
  const[compareLoad, setCompareLoad] = useState<boolean>(false);
  const[addLoad, setAddLoad] = useState<boolean>(false);

  const checkItemParam: CartNewKeys = {chosenSize: size, chosenColor: color, amount, total: newPrice * amount};

  const addToWishBtn = (id:number): void => {
    setWishLoad(true);
    setTimeout(function() {
      dispatch(addToWish(id));
      setWishLoad(false);
    }, 1000);
  }

  const addToCompareBtn = (id:number): void => {
    setCompareLoad(true);
    setTimeout(function() {
      dispatch(addToCompare(id));
      setCompareLoad(false);
    }, 1000);
  }

  const handleAddAmount = (id:number): void => {
    setAddLoad(true);
    setTimeout(function() {
      dispatch(addAmountToItem({id, size, color, amount}));
      setAmount(1);
      setAddLoad(false);
    }, 1000);
  }

  const chooseSize = (val: string): void => {
    setSize(val);
  }

  const decreaseVal = (): void => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  }


  const shareOnFacebook = (): void =>{
    const navUrl = 'https://www.facebook.com/sharer/sharer.php?u=' +
     'https://github.com/knoldus/angular-facebook-twitter.git';
    window.open(navUrl , '_blank');
  }

  return (
    <div className='details'>
      <div className='stars'>
        {[...Array(4)].map((star, index)=> <span><IoMdStar /></span>)}
        <span><IoMdStarHalf /></span>
        <span className='num'>(4.5)</span>
      </div>
      <h1>{name}</h1>
      <span className='category'>{category}</span>
      <hr />
      <div className='price'>
        <span className='new-price price'>${newPrice}</span>
        <span className='old-price price'>${oldPrice}</span>
      </div>
      <div className='info'>
        <p>{desc}</p>
      </div>
      <ul className='item-colors'>
        {
          smallImgs.map(item => {
            const {id} = item;
            return (
              <li key={id} className='item-color'>
                <button
                className={color.id === item.id ? 'color-btn active' : 'color-btn'}
                style={{background: item.color, outline: '1px solid' + item.color}}
                 onClick={()=>setColor(item)}
                ></button>
              </li>
            )
          })
        }
      </ul>
      
      <ul className='sizes'>
        {
          sizes.map((item, index) => {
            return(
                <button 
                key={index}
                className = {item === size ? "size active" : "size"}
                onClick={()=>chooseSize(item)} >
                {item} 
                </button>
            )
          })
        }
      </ul>
      <div className="add-to-cart">
        <div className='inputs-content'>
          <div className='amount'>
            <div className='num'>
              <input type="number" min={0} value={amount} onChange={(e) =>setAmount(parseInt(e.target.value))} />
            </div>
            <div className='control'>
              <button onClick={()=> setAmount(amount + 1)}>+</button>
              <button onClick={decreaseVal}>-</button>
            </div>
          </div>
          <button 
          className={addLoad ? 'disabled add' : 'add'}
          onClick={() => handleAddAmount(id)}
          >
          {addLoad ? <AiOutlineReload className='load'/>  : 'add to cart'}
          </button>
        </div>
        <div className='buy'>
          <Link 
          className='link special-btn' 
          to={checkoutPath + "/" + id}
          onClick={()=> dispatch(setCheckouItem(checkItemParam))}
          >
            Buy it now
          </Link>
        </div>
      </div>
      <hr />
      <div className='interact'>
        <div className='box'>
          {isItemExist(id, wishItems) ? 
          <Link to="/wishlist" className="link icon-btn">
            <FaHeart /> <span className='title'>View wishlist</span>
          </Link>
          :<button onClick={()=>{addToWishBtn(id)}} className='icon-btn'>
            {wishLoad ? <AiOutlineReload className='load'/> : <FiHeart />}
            <span className='title'><span className='hide-mobile'>Add to </span>wishlist</span>
          </button>}
        </div>
        <div className='box'>
          {isItemExist(id, compareItems) ?
          <Link to="/compare" className="link icon-btn">
            <MdDoneOutline /> <span className='title'>View compare list</span>
          </Link>
          :<button onClick={()=>{addToCompareBtn(id)}} className='icon-btn'>
            {compareLoad ? <AiOutlineReload className='load'/> : <DiGitCompare />}
            <span className='title'><span className='hide-mobile'>Add to </span>compare</span>
          </button>}
        </div>
        <div className='box'>
          <button onClick={shareOnFacebook} className='icon-btn'>
            <FiShare2 /> 
            <span className='title'>Share</span>
          </button>
        </div>
      </div>
      <hr />
      <ul className='payment-methods'>
        {
          paymentMethods.map(method => {
            const {id, name, img} = method;
            return (
              <li key={id} className="method">
                <img src={img} alt={name} />
              </li>
            )
          }) 
        }
      </ul>
    </div>
  )
}

export default Details;
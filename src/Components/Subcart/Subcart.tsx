import React, { FC, SetStateAction } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import emptySubCartImg from "../Assets/images/empty-cart.webp"
import { RootState } from '../Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseAmount, increaseAmount, removeFromCart } from '../Redux/Slices/cartSlice';
import "./Subcart.scss"
import BlankPage from '../BlankPage/BlankPage';
import { IDSizeColor } from '../Assets/types';
import { closeAndGoUp, setShowSubcart } from '../Redux/Slices/globalSlice';

const Subcart:FC = () => {

    const {showSubcart} = useSelector((state:RootState) => state.global);
    const cart = useSelector((state:RootState) => state.cart);
    const {cartItems, amount, total} = cart;
    const dispatch = useDispatch();

    const closeUp = (): void => {dispatch(closeAndGoUp());}

  return (
    <div className={showSubcart? "subcart show" : "subcart hide"}>
        <div className='title flx'>
            <div>
                <h4>Shopping Cart</h4>
                {amount > 0 && <span>{amount} items</span>}
            </div>
            <button 
            className='close'
            onClick={()=>dispatch(setShowSubcart(false))}
            >
            <IoCloseSharp />
            </button>
        </div>
        {amount > 0 ? <div>
            <div className='subcart-items'>
                {
                    cartItems.map((item, i)=> {
                        const{id, name, newPrice, amount, chosenSize, chosenColor} = item;
                        const funParam:IDSizeColor = {id, size: chosenSize, color: chosenColor};
                        return(
                            <div key={i} className='subcart-item flx'>
                                <Link className='link' to={"/product/"+ id} onClick={closeUp}>
                                    <img src={chosenColor.img} />
                                </Link>
                                <div className='details'>
                                    <Link className='link' to={"/product/"+ id} onClick={closeUp}><h5>{name}</h5></Link>
                                    <p className='item-price'>{amount} {chosenSize} <span> x </span>{newPrice} $</p>
                                    <div className='control'>
                                        <button 
                                        className='inc-dec'
                                        onClick={()=>dispatch(increaseAmount(funParam))}
                                        >
                                        +
                                        </button>
                                        <input type="number" min={0} value={amount} />
                                        <button 
                                        className='inc-dec'
                                        onClick={()=>dispatch(decreaseAmount(funParam))}
                                        >
                                        -
                                        </button>
                                    </div>
                                </div>
                                <div className='remove'>
                                    <button onClick={()=>dispatch(removeFromCart(funParam))}><IoCloseSharp /></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="subcart-total title flx">
                <h4>Subtotal:</h4>
                <span>{total} $</span>
            </div>
            <div className="subcart-btns flx">
                <Link className="link" to="/cart" onClick={closeUp}>view cart</Link>
                <button onClick={closeUp}>check out</button>
            </div>
        </div>
        : <BlankPage name='cart' img={emptySubCartImg} />
        }
    </div>
  )
}

export default Subcart;
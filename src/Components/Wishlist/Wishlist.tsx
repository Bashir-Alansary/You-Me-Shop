import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../Redux/store'
import { removeFromWish } from '../Redux/Slices/wishSlice';
import { RiDeleteBin2Line } from "react-icons/ri";
import emptyWishlistImg from "../Assets/images/empty-wishlist.png";
import wishBanner from "../Assets/images/wishlist_banner.png"
import BlankPage from '../BlankPage/BlankPage';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
import "./Wishlist.scss"

export const Wishlist = () => {

    const {wishItems}= useSelector((state:RootState) => state.wish);
    const dispatch = useDispatch();
    
  return (
    <div className='wishlist'>
        <Banner title='Your wishlist' img={wishBanner} num={wishItems.length} />
        <div className='container'>
            {wishItems.length ?
                <div className='content'>
                    <div className='for-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Description</th>
                                    <th>Unit Price</th>
                                    <th>option</th>
                                    <th>remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    wishItems.map(item => {
                                        const {id, smallImgs, name, newPrice} = item;
                                        return(
                                            <tr key={id}>
                                                <td>
                                                    <Link 
                                                    className='link' 
                                                    to={'/product/' + id}
                                                    >
                                                    <img src={smallImgs[0].img} />
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link 
                                                    className='link' 
                                                    to={'/product/' + id}
                                                    >
                                                    {name}
                                                    </Link>
                                                </td>
                                                <td>${newPrice}</td>
                                                <td className='special'>
                                                    <Link className='link special-btn'to={'/product/' + id}>option</Link>
                                                </td>
                                                <td>
                                                <button className='remove' onClick={()=>dispatch(removeFromWish(id))}>
                                                    <RiDeleteBin2Line />
                                                </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                :<BlankPage name='wishlist' img={emptyWishlistImg} />
            }
        </div>
    </div>
  )
}

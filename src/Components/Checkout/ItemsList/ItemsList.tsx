import React, { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { useParams } from 'react-router-dom'
import products from '../../Assets/globalData/products';
import { CartItemsType } from '../../Assets/types';
import "./ItemsList.scss"


const ItemsList:FC = () => {

    const {cartItems, total} = useSelector((state:RootState) => state.cart);
    const {id} = useParams();
    const {checkoutItem} = useSelector((state:RootState) => state.global);
    const {chosenSize, chosenColor} = checkoutItem;
    const [activeList, setActiveList] = useState<boolean>(false);
    

    const getItems = (): CartItemsType[] => {
      if (id === undefined) {
        return cartItems;
      } else {
        const items = products.filter(item => item.id === parseInt(id));
        return [{...items[0], chosenSize, chosenColor, amount: checkoutItem.amount, total: checkoutItem.total}];
      }
    }

    window.addEventListener('scroll', ()=> {
      if (window.scrollY > 100) {
        setActiveList(true);
      } else {
        setActiveList(false);
      }
    })
    
  return (
    <div className={activeList ? 'items-list active' : 'items-list'}>
        <div className='items'>
        {
          getItems().map((item, i) => {
            const { name, chosenSize, chosenColor, amount, total, info } = item;
            return (
              <div key={i} className='box'>
                <div className='content flx'>
                  <div className='info'>
                    <div className='imgbx'>
                      <span className='item-amount flx-c'>{amount}</span>
                      <img src={chosenColor.img} />
                    </div>
                    <div className='text'>
                      <p className='name'>{name}</p>
                      <p className='desc'>{chosenSize} / {info.dimensions} / {chosenColor.name}</p>
                    </div>
                  </div>
                  <p className='s-total'>${total}</p>
                </div>
              </div>
            )
          })
        }
        </div>
        <div className='final-info'>
          <div className='subtotal flx'>
            <p className='name'>Subtotal</p>
            <p className='s-total'><b>${id? checkoutItem.total : total}</b></p>
          </div>
          <div className='shipping flx'>
            <p className='name'>Shipping</p>
            <p className='ship-adress'>Enter shipping address</p>
          </div>
          <div className='total flx'>
            <h3 className='total-name'>Total</h3>
            <div className='b-total'><span>CAD</span><h3>${id? checkoutItem.total : total}</h3></div>
          </div>
        </div>
    </div>
  )
}

export default ItemsList
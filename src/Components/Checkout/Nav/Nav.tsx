import React, { FC } from 'react'
import logo from "./../../Assets/images/logo.png";
import { BsHandbag } from "react-icons/bs";
import "./Nav.scss"
import { Link } from 'react-router-dom';

const CheckoutNav:FC = () => {
  return (
    <div className='checkout-nav'>
        <div className='container flx'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <div className='cart-bag'>
                <Link className='link' to="/cart">
                  <BsHandbag />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CheckoutNav
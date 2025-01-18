import React, { FC } from 'react'
import "./Checkout.scss"
import Nav from './Nav/Nav'
import Forms from './Forms/Forms'
import ItemsList from './ItemsList/ItemsList'

const Checkout:FC = () => {

  return (
    <div className='checkout'>
        <Nav />
        <div className='content flx'>
          <Forms />
          <ItemsList />
        </div>
    </div>
  )
}

export default Checkout
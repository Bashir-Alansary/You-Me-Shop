import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../Assets/globalData/products';
import { ProductImgs } from './ProductImgs/ProductImgs';
import ProductAbout from './ProductAbout/ProductAbout';
import Related from './Related/Related';
import "./Product.scss"
import Details from './Details/Details';
import { ProductType } from '../Assets/types';

export const Product = () => {
    const {id}= useParams();
    const product:ProductType | undefined = products.find(item => item.id === Number(id));
  return product ? (
    <div className='product'>
        <div className='container'>
        <div className='content flx'>
          <ProductImgs product = {product} />
          <Details product = {product} />
        </div>
        <ProductAbout product = {product} />
        <Related id={product.id} category={product.category}/>
        </div>
    </div>
  ) : null
}

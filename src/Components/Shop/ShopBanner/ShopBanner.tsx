import React, { FC } from 'react'
import {Link} from "react-router-dom";
import products from '../../Assets/globalData/products';
import "./ShopBanner.scss"

interface Props {
    img: string,
    category: string,
}

const ShopBanner:FC<Props> = ({img, category}) => {

    const categories: string[] = [...Array.from(new Set(products.map(item => item.category))), "Shop"];
    const unChosenCategories = categories.filter(item => item !== category);
    const categoryItemsLength:number | false = category !== "Shop" ? products.filter(item => item.category === category).length : false;


  return (
    <div className='banner'>
        <div className='container'>
            <div className='banner-content flx'>
                    <div className='text'>
                        <div className='categories'>
                            <h1 className='chosen-category'>{category}</h1>
                            <ul className='other-categories'>
                                {
                                    unChosenCategories.map((item, i) => {
                                        return (
                                            <li key={i}>
                                                {i > 0 ?<span className='slash'>/</span> : null}
                                                <Link className='link' to={"/" + item.toLowerCase()}>{item}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        {categoryItemsLength ?
                            <h2 className='hide-mobile'><span>{categoryItemsLength}</span> items<span> for </span>{category}</h2>
                        : <h2 className='hide-mobile'><span>12</span> Hours <span>20</span> Mins</h2>
                        }
                        <button className='banner-btn hide-mobile'>Explore now</button>
                    </div>
                    <div className='imgbx hide-mobile'>
                        <img src={img} />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default ShopBanner;
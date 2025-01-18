import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import {RiDeleteBin2Line} from "react-icons/ri"
import emptyCompareImg from "../Assets/images/empty-compare.png"
import compareBanner from "../Assets/images/compare_banner.png"
import "./Compare.scss"
import { removeFromCompare } from '../Redux/Slices/compareSlice';
import BlankPage from '../BlankPage/BlankPage';
import Banner from '../Banner/Banner';

export const Compare = () => {

    const {compareItems} = useSelector((state:RootState) => state.compare)
    const dispatch = useDispatch();

  return (
    <div className='compare'>
      <Banner title='Your compare' img={compareBanner} num={compareItems.length} />
        <div className='container'>
            {compareItems.length ?
              <div className='content'>
              {
                compareItems.map(item => {
                    const {id, smallImgs, name, newPrice} = item;
                    return (
                      <div className='box'>
                        <div className='imgbx'>
                        <Link className='imgbx link' to={"/product/"+ id}  onClick={()=>window.scroll(0,0)}>
                          <img src={smallImgs[0].img} />
                        </Link>
                        </div>
                        <div className='text'>
                        <Link className='link' to={"/product/"+ id}  onClick={()=>window.scroll(0,0)}>
                          <h3>{name}</h3>
                        </Link>
                          <span>${newPrice}</span>
                          <Link className='link special-btn' to={"/product/"+id}><span className='hide-mobile'>select</span>&nbsp;options</Link>
                          <button className="remove" onClick={()=> dispatch(removeFromCompare(id))}>
                            <RiDeleteBin2Line className='remove-icon' />
                          </button>
                        </div>
                      </div>
                    )
                })
              }
              </div>
              :<BlankPage name='compare' img = {emptyCompareImg} />
            }
        </div>
    </div>
  )
}

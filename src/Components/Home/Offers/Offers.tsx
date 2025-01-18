import React, { FC } from 'react'
import offersImg from "../../Assets/images/offers.png"
import waveImg from "../../Assets/images/wave.png"
import "./Offers.scss"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import { closeAndGoUp } from '../../Redux/Slices/globalSlice'

const Offers:FC = () => {
    const dispatch = useDispatch();

  return (
    <div className='offers'>
        <div className='container'>
            <div className='content flx'>
                <div className='text'>
                    <h1>Exclusive<br />offers for you</h1>
                    <span>only on best sellers products</span>
                    <Link to="/shop" className='link' onClick={()=>dispatch(closeAndGoUp())} >check now</Link>
                </div>
                <div className='imgbx'>
                    <img src={offersImg} />
                </div>
            </div>
        </div>
        <img className='wave top' src={waveImg}/>
        <div className='gradient'></div>
    </div>
  )
}

export default Offers;
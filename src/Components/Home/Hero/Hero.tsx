import React, { FC } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import waveImg from "../../Assets/images/wave.png"
import "./Hero.scss"
import { Link } from 'react-router-dom';

const Hero:FC = () => {
  return (
    <div className='hero'>
        <div className='container'>
            <div className='content'>
                <div className='text'>
                   <h5>Winter Collection</h5>
                   <h1>New Winter <br/> Collection 2023</h1>
                   <h5>There is nothing like trend</h5>
                   <Link to="/shop" className="link"><span className='txt'>Shop Now</span><span className='chevron'><IoIosArrowRoundForward /></span></Link>
                </div>
            </div>
            <img className='wave bottom' src={waveImg} />
        </div>
    </div>
  )
}

export default Hero;
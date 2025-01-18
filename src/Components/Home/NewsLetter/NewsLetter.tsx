import React from 'react'
import { IoArrowForwardSharp } from "react-icons/io5";
import newsLetter from './data';
import newsletterImg from "../../Assets/images/newsletter.png"
import "./NewsLetter.scss"

const NewsLatter = () => {
  return (
    <div className='newsletter'>
        <div className='container'>
            <div className='content flx'>
                <div className='imgbx'>
                    <img src={newsletterImg} />
                </div>
                <div className='text'>
                    <h1>Don't miss out on<br />special offers</h1>
                    <p>Register to receive news about the latest, savings combos, discount codes...</p>
                    <ul className='features'>
                        {
                            newsLetter.map(item=>{
                                const {id, name, num, color, borderColor} = item;
                                return(
                                    <li className='feature' key={id}>
                                        <span className='num' style={{color, border: '1px solid' + borderColor}}>{num}</span>
                                        <span className='title'>{name}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='subscribe'>
                        <input type="email" placeholder='Enter your email' />
                        <button><IoArrowForwardSharp /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLatter;
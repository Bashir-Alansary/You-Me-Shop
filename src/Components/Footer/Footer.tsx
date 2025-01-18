import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { pages, media, paymentWays } from './data'
import { contactWays } from "../Assets/globalData/contactWays"
import logo from "../Assets/images/logo.png"
import "./Footer.scss"
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';

const Footer = () => {

    const {checkoutPath} = useSelector((state:RootState) => state.global);
    const location = useLocation();

  return (
    <>
    { !location.pathname.includes(checkoutPath) &&
    <div className='footer'>
        <div className='content'>
            <div className='container'>
                <div className='info flx'>
                    <div className='desc'>
                        <p className='hide-mobile'>
                            At vero eos et accusamus et iusto odio dignissimos ducimus,
                                duis faucibus enim vitae duis faucibus enim vitae
                        </p>
                        <ul className='media'>
                            {
                                media.map(item=>{
                                    const{id, icon, link} = item;
                                    return(
                                        <li key={id}>
                                            <a href={link} >
                                                <img src={icon} />
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='footer-logo'>
                        <img src={logo} />
                        <ul className='pages'>
                            {
                                pages.map((item, i)=>{
                                    const{id, name, link} = item;
                                    return(
                                        <li key={id} className='page flx-c'>
                                            {i < pages.length - 1 ?
                                            <><Link className='link' to={link} >{name}</Link><span className='slash'>/</span></>
                                            : <Link className='link' to={link} >{name}</Link>
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='details hide-mobile'>
                        <ul className='contact-ways'>
                            {
                                contactWays.map(item=>{
                                    const{id, name, icon} = item;
                                    return(
                                        <li key={id}>
                                            <div className='icon'>{icon}</div>
                                            <p>{name}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul className='payment-ways'>
                            {
                                paymentWays.map(item=>{
                                    const{id, name, img} = item;
                                    return(
                                        <li key={id}>
                                            <img src={img} alt={name} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
        </div>
        </div>
        <hr />
        <div className='rights'>
            <div className='container'>
                <p className='copyright'>
                    Copyright © 2021 Vino.<span className='hide-mobile'>Vinovathemes. All rights reserved</span>
                </p>
                <div className='terms'>
                    <a href='#'>Privacy Policy</a>
                    <span className='slash'>|</span>
                    <a href='#'>Terms</a>
                    <span className='hide-mobile'>
                        <span className='slash'>|</span>
                        <a href='#'>FAQs</a>
                    </span>
                </div>
            </div>
        </div>
        <div className='gradient'></div>
    </div>
    }
    </>
  )
}

export default Footer;
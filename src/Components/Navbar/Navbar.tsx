import React, { FC, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiPlus, FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../Redux/store'

import logo from "../Assets/images/logo.png"
import cart from "../Assets/images/cart.png"
import wishlist from "../Assets/images/wishlist.png"

import "./Navbar.scss"
import Subcart from '../Subcart/Subcart';
import SubSearch from '../SubSearch/SubSearch';
import TemplatesList from '../TemplatesList/TemplatesList';
import { setShowSubcart } from '../Redux/Slices/globalSlice';
import { links } from './data';

export const Navbar:FC = () => {

    const {amount} = useSelector((state:RootState) => state.cart);
    const {checkoutPath} = useSelector((state:RootState) => state.global);
    const dispatch = useDispatch();
    const [showTemplates, setShowTemplates] = useState<boolean>(false);
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const [togglebtn, setToggleBtn] = useState<boolean>(false);
    const [activeNav, setActiveNav] = useState<boolean>(false);

    const location = useLocation();

    const hideMobileMenu = (): void => { setToggleBtn(false); }

    const handleToggleBtn = () => {
        if (togglebtn) {
            setToggleBtn(false);
            setShowTemplates(false);
            console.log(showTemplates);
        } else {
            setToggleBtn(true);
        }
    }

    window.addEventListener('scroll', ()=> {
        if (window.scrollY > 90) {
          setActiveNav(true);
        } else {
          setActiveNav(false);
        }
      })

  return (
    <>
    { !location.pathname.includes(checkoutPath) &&
    <div className={activeNav? 'navbar active' : 'navbar'}>
        <div className='container'>
            <div className='content flx'>
                <div className='logo'>
                    <Link to="/" onClick={hideMobileMenu}><img src={logo} /></Link>
                </div>
                <div className={togglebtn? 'main-links show' : 'main-links hide'}>
                    <ul className='links flx'>
                        {
                            links.map(link => {
                                const {id, name, href} = link;
                                return (
                                    <li key={id}>
                                        <Link 
                                        className={location.pathname === href? 'link active' : 'link'}
                                        onClick={hideMobileMenu}
                                        to={href}
                                        >
                                        {name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {/* for pc */}
                    <div className='tamplates-link hide-mobile' onMouseEnter={()=>setShowTemplates(true)} onMouseLeave={()=>setShowTemplates(false)}>
                        <div className='btn-content'>
                            <button>
                                <span>tamplates</span>
                                <FiPlus className='templates-icon'/>
                            </button>
                        </div>
                        <TemplatesList showTemplates = {showTemplates} hideMobileMenu={hideMobileMenu} />
                    </div>
                    {/* for mobile */}
                    <div className='tamplates-link hide-pc' onClick={()=>setShowTemplates(!showTemplates)}>
                        <div className='btn-content'>
                            <button className={showTemplates? 'active' : ''}>
                                <span>tamplates</span>
                                <FiPlus className='templates-icon'/>
                            </button>
                        </div>
                        <TemplatesList showTemplates = {showTemplates} hideMobileMenu={hideMobileMenu} />
                    </div>
                </div>
                <div className='options flx'>
                    <div className='login-search flx'>
                        <button className="search op-btn" onClick={()=> setShowSearch(true)}>
                            <FiSearch className='icon' />
                        </button>
                        <SubSearch showSearch={showSearch} setShowSearch={setShowSearch} />
                        
                        <Link className="link wish" to="/wishlist"><img src={wishlist} /></Link>
                        <Link className="link login" to="/login" onClick={hideMobileMenu}><AiOutlineUser className='icon' /></Link>
                    </div>
                    <button className='cart-btn op-btn' onClick={()=> dispatch(setShowSubcart(true))}>
                        <span className='num'>{amount}</span>
                        <img src={cart} />
                    </button>
                    <Subcart />
                </div>
                <button className='toggle hide-pc' onClick={handleToggleBtn}>
                    <span className={togglebtn? 'short active' : 'short'}></span>
                    <span className={togglebtn? 'long active' : 'long'}></span>
                </button>
            </div>
        </div>
    </div>
    }
    </>
  )
}

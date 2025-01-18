import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiLock } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import bogus from "../../Assets/images/bogus.svg"
import "./Forms.scss"
import { countries } from './data';
import { InputEventType } from '../../Assets/types';

const Forms:FC = () => {

    const [showBill, setShowBill] = useState<boolean>(false);
    const [showLabel, setShowLabel] = useState<boolean>(false);
    const optional: string = " (optional)";

    const handleChange = (e: InputEventType) => {
        setShowLabel(true);
    }

    const handleBlur = (e: InputEventType) => {
        setShowLabel(false);
    }

    const countriesOptions = 
    <>
        {
            countries.map(country => {
                const {name, code} = country;
                return <option value = {code}>{name}</option>
            })
        }
    </>

  return (
    <div className='forms'>
        <form>
            <div className='contact box'>
                <div className='title flx'>
                    <h3>Contact</h3>
                    <Link className='login-link' to="/login">Log in</Link>
                </div>
                <div className='inputs'>
                    <div className='input-content'>
                        <input type='text' autoFocus placeholder='Email or mobile phone number' />
                    </div>
                    <div className='input-content'>
                        <input type= "checkbox" id='emailme' />
                        <label htmlFor='emailme'>Email me with news and offers</label>
                    </div>
                </div>
            </div>
            <div className='delivery box'>
                <h3>Delivery</h3>
                <div className='inputs'>
                    <div className='input-content'>
                        <label className='inside show'>Country/Region</label>
                        <select name="country" id="country">{countriesOptions}</select>
                    </div>
                    <div className='input-content flx flx2'>
                        <input type='text' placeholder={'First name' + optional} />
                        <input type='text' placeholder='Last name' />
                    </div>
                    <div className='input-content'>
                        <label className={showLabel ? 'inside show' : 'inside hide'}>Adress2</label>
                        <input type='text' name='adress' placeholder='Adress' onChange={handleChange} onBlur={handleBlur} />
                        <div className='input-icon'><GoSearch /></div>
                    </div>
                    <div className='input-content'>
                        <input type='text' placeholder={'Apartment, suite, etc.' + optional} />
                    </div>
                    <div className='input-content flx flx3'>
                        <div className='back'><input type='text' placeholder='city' /></div>
                        <div className='back'>
                            <div className='in'>
                                <label className='inside show'>Province</label>
                                <select name="country" id="country">{countriesOptions}</select>
                            </div>
                        </div>
                        <div className='back'><input type='text' placeholder='city' /></div>
                    </div>
                    <div className='input-content'>
                        <input type= "checkbox" id='emailme' />
                        <label htmlFor='emailme'>Save this information for next time</label>
                    </div>
                    <div className='shipping box'>
                        <h4>Shipping method</h4>
                        <div className='method'>
                            <span>Enter your shipping address to view available shipping methods.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='payment box'>
                <h3>Payment</h3>
                <span>All transactions are secure and encrypted.</span>
                <div className='inputs'>
                    <div className='credit flx'>
                        <span>Credit card</span>
                        <img src={bogus}/>
                    </div>
                    <div className='content'>
                        <div className='card'>
                            <div className='input-content'>
                                <label className={showLabel ? 'inside show' : 'inside hide'}>Card number</label>
                                <div className='back'>
                                    <input type='text' placeholder='Card number' onChange={handleChange} onBlur={handleBlur} />
                                </div>
                                <div className='input-icon'><FiLock /></div>
                            </div>
                            <div className='input-content flx flx2'>
                                <div className='back'><input type="text" placeholder='Expiration date (MM/YY)' /></div>
                                <div className='back'>
                                    <div className='in'>
                                        <input type='text' placeholder='Security code' />
                                        <div className='input-icon'><FaRegQuestionCircle /></div>
                                    </div>
                                </div>
                            </div>
                            <div className='input-content'>
                                <div className="back"><input type='text' placeholder='Name on card' /></div>
                            </div>
                            <div className='input-content'>
                                <input type= "checkbox" checked = {showBill ? false : true} id='useShip' onChange={()=>setShowBill(!showBill)} />
                                <label htmlFor='useShip'>Use shipping address as billing address.</label>
                            </div>
                        </div>
                        <div className={showBill? "billing show" : "billing hide"}>
                            <h4>Billing adress</h4>
                            <div className="inputs">
                                <div className='input-content'>
                                    <div className='back'>
                                        <label className='inside show'>Country/Region</label>
                                        <select name="country" id="country">{countriesOptions}</select>
                                    </div>
                                </div>
                                <div className='input-content flx flx2'>
                                    <div className='back'><input type='text' placeholder={'First name' + optional} /></div>
                                    <div className='back'><input type='text' placeholder='Last name' /></div>
                                </div>
                                <div className='input-content'>
                                    <div className='back'><input type='text' placeholder='Adress' /></div>
                                        <div className='input-icon'><GoSearch /></div>
                                </div>
                                <div className='input-content'>
                                    <div className='back'><input type='text' placeholder={'Apartment, suite, etc.' + optional} /></div>
                                </div>
                                <div className='input-content flx flx3'>
                                    <div className='back'><input type='text' placeholder='city' /></div>
                                    <div className='back'>
                                        <div className='in'>
                                            <label className='inside show'>province</label>
                                            <select name="country" id="country">{countriesOptions}</select>
                                        </div>
                                    </div>
                                    <div className='back'><input type='text' placeholder='Postal code' /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pay-btn box'>
                <button className='btn'>Pay now</button>
            </div>
        </form>
    </div>
  )
}

export default Forms
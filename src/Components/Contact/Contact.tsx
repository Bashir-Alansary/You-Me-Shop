import React from 'react'
import Banner from '../Banner/Banner'
import contactBanner from "../Assets/images/contact_banner.png"
import { contactWays } from '../Assets/globalData/contactWays'
import "./Contact.scss"

const Contact = () => {
  return (
    <div className='contact'>
        <Banner img={contactBanner} title={"Contact us"} num = {20} />
       <div className='container'>
        <iframe
            width="100%" 
            height="300" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37451031098!2d31.258464350000004!3d30.059488450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e6817b4f86b%3A0x9cce54b89170bcaf!2sGenena%20Mall!5e0!3m2!1sen!2seg!4v1712073293355!5m2!1sen!2seg" 
            frameBorder="0" scrolling="no"
            >
            </iframe>
            <div className='content flx'>
                <form>
                    <div className='input-content name-phone'>
                        <input type='text' id='name' placeholder='name' />
                        <input type='text' id='phone' placeholder='phone' />
                    </div>
                    <div className='input-content'>
                        <input type='email' id='email' placeholder='email' />
                    </div>
                    <div className='input-content'>
                        <textarea placeholder='message'></textarea>
                    </div>
                    <div className='input-content'>
                        <button>send</button>
                    </div>
                </form>
                <ul className='info'>
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
            </div>
       </div>
    </div>
  )
}

export default Contact;

import React from 'react'
import aboutBanner from "../Assets/images/about_banner.png"
import about from "../Assets/images/about.jpg"
import "./About.scss"
import Banner from '../Banner/Banner'

const About = () => {
    return (
        <div className='about'>
            <Banner img={aboutBanner} title={"About us"} num = {20} />
            <div className='container'>
                <div className='content'>
                    <div className='imgbx'>
                        <img src={about} />
                    </div>
                    <div className='text'>
                        <h4>who are we?</h4>
                        <h1>Combine Elegance And Style In Your Wardrobe</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In sed mauris id lacus volutpat consectetur sed non velit.
                        Nulla ultrices luctus libero vel feugiat. Vestibulum suscipit 
                        ligula et eros volutpat, quis gravida ex rutrum. Morbi non blandit 
                        orci, eu ultrices risus. Maecenas volutpat dui vitae sem hendrerit, 
                        quis finibus turpis porta. Pellentesque et efficitur eros, in dapibus ex. 
                        Orci varius natoque penatibus et magnis dis
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
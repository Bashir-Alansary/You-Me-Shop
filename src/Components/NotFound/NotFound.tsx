import React from 'react'
import notFound from "../Assets/images/error404.png"
import { Link } from 'react-router-dom'
import "./NotFound.scss"

const NotFound = () => {
    return (
        <div className='not-found'>
            <div className='content'>
                <img src={notFound} />
                <h2>Oops! Page Not Found.</h2>
                <div className='main-btn'>
                    <Link className='link special-btn' to="/">Go to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;
import React from 'react'
import loginBanner from "../Assets/images/login_banner.png"
import Banner from '../Banner/Banner'
import "./Login.scss"

const Login = () => {
  return (
    <div className='login'>
      <Banner  title = {"let's login"} img={loginBanner} num = {20}/>
      <div className="login-content">
      <h2>Sign in</h2>
       <div className='inputs-content'>
          <input type="text" placeholder="your name" />
          <input type="email" placeholder="your email" />
          <input type="password" placeholder="your password" />
       </div>
       <button>Continue</button>
       <p className='have-account'>Already have an account? <a href="#">Login here</a></p>
       <div className='login-agree'>
         <input type="checkbox" />
         <p>I agree of the terms to use privacy</p>
       </div>
      </div>
    </div>
  )
}

export default Login;

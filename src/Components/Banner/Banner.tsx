import React, { FC } from 'react'
import "./Banner.scss"

interface Props {
  img: string,
  title: string,
  num: number,
}

const Banner:FC<Props> = ({img, title, num}) => {
  return (
    <div className='banner'>
        <div className='container'>
          <div className='banner-content flx'>
              <div className='text'>
                  <h1>{title}</h1>
                  <h2><span>{num}</span> items <span>in </span>{title}</h2>
                  {/* <h2><span>12</span> Hours <span>20</span> Mins</h2> */}
                  <button className='banner-btn hide-mobile'>Explore now</button>
              </div>
              <div className='imgbx hide-mobile'>
                  <img src={img} />
              </div>
          </div>
        </div>
    </div>
  )
}

export default Banner;
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Grid } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/grid";
import 'swiper/css/navigation';

// *****
import { Item } from '../../Item/Item';
import popular from '../../Assets/globalData/popular';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "./Popular.scss";

export default () => {
  return (
    <div className='popular'>
      <div className='container'>
        <div className='title flx'>
          <h1 className='h1-title'>Popular Products</h1>
          <div className='control'>
            <button className='prev'><FaArrowLeft /></button>
            <button className='next'><FaArrowRight /></button>
          </div>
      </div>
      <Swiper
        modules={[Navigation, Grid]}
        slidesPerView={4}
        grid={{rows: 2, fill: "row"}}
        navigation = {{nextEl: '.next', prevEl:'.prev'}}
        breakpoints={{
          200: {slidesPerView: 1, spaceBetween:15},
          400: {slidesPerView: 2, spaceBetween:20},
          780: {slidesPerView: 3, spaceBetween:25},
          1000: {slidesPerView: 4, spaceBetween:30}
        }}
      >
        {
          popular.map(item => {
              return(
                <SwiperSlide key={item.id}><Item {...item} itemClass={'item item-swiper'}/></SwiperSlide>
              )
          })
        }
      </Swiper>
      </div>
    </div>
  );
};

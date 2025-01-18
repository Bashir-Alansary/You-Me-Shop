import React, { FC } from 'react'
import Hero from './Hero/Hero'
import Popular from './Popular/Popular'
import Offers from './Offers/Offers'
import Explore from './Explore/Explore'
import NewsLatter from './NewsLetter/NewsLetter'
import ScrollToUp from '../ScrollToUp/ScrollToUp'

export const Home:FC = () => {
  return (
    <div>
        <Hero />
        <Popular />
        <Offers />
        <Explore />
        <NewsLatter />
        <ScrollToUp />
    </div>
  )
}

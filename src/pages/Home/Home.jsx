import React, { useState, useEffect, useRef } from 'react'
import Contact from '../Contact/Contact'
import Project from '../Project/Project'
import Banner from './Banner/Banner'
import Testimonial from './Testimonial/Testimonial'
import About from '../About/About'
import BlogCard from '../Blog/BlogCard'
import Media from '../Media/Media'
import Reel from './Service/Reel'
import Ticket from '../Tickets/Ticket'
import NewBanner from './NewBanner/NewBanner'

const Home = () => {
  return (
    <div>
      <div className='pt-16'>
        <Banner />
        <Reel id='reel' />
        {/* <NewBanner /> */}
        <About id='aboutSection' />
        <Ticket id='gettickets' />
        <Testimonial id='testimonialSection' />
        <BlogCard id='blogCardSection' />
        <Media id='mediaSection' />
        <Project id='projectSection' />
        <Contact id='contactSection' />
      </div>
    </div>
  )
}

export default Home

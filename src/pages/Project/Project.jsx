import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaDownload } from 'react-icons/fa'
import { RiFolderInfoFill } from 'react-icons/ri'
import TypeAnimation from 'react-type-animation'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Project.css'

import clientbg from '../../assets/clientbg.png'

import {
  headingAnimation,
  sectionBodyAnimation,
} from '../../hooks/useAnimation'
import BottomLine from '../../components/BottomLine'
import mainbg from '../../assets/mainbg.png'

const Project = () => {
  const [ref, inView] = useInView()
  const [viewDiv, setViewDiv] = useState(false)
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      setViewDiv(true)
    } else {
      setViewDiv(false)
    }
  }, [inView, animation])
  const settings = {
    // dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    // variableWidth: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div
      className='main-section'
      style={{
        backgroundImage: `url(${mainbg})`,
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        backgroundSize: 'cover',
        height: 'auto',
      }}
      id='clients'
    >
      {' '}
      {/* <div
        className='mb-8'
        initial='hidden'
        animate={viewDiv && 'visible'}
        variants={headingAnimation}
      >
        <h1
          className='text-4xl font-semibold text-left text-white ml-8'
          style={{ color: '#fefb01' }}
        >
          Clients
        </h1>
        <BottomLine />
      </div> */}
      {/* Client image */}
      <img
        src={clientbg}
        alt='Client'
        style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }}
      />
    </div>
  )
}

export default Project

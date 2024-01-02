import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import './Testimonial.css'
import { useInView } from 'react-intersection-observer'
import Slider from 'react-slick'
import Reviews from '../../../assets/Reviews'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  headingAnimation,
  sectionBodyAnimation,
} from '../../../hooks/useAnimation'
import BottomLine from '../../../components/BottomLine'
import mainbg from '../../../assets/mainbg.png'

const Testimonial = () => {
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
    speed: 300,
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
      className='parent py-12'
      style={{
        backgroundImage: `url(${mainbg})`, // Replace "your-image-url.jpg" with the URL of your background image
        backgroundSize: 'cover', // You can adjust this based on your preference
        backgroundPosition: 'center', // You can adjust this based on your preference

        width: '100%',
        height: 'auto',
      }}
      id='testimonial'
    >
      <div
        className='mb-8'
        initial='hidden'
        animate={viewDiv && 'visible'}
        variants={headingAnimation}
      >
        <h1
          className='text-4xl font-semibold text-left text-white ml-8'
          style={{ color: '#fefb01' }}
        >
          TESTIMONIALS
        </h1>
        <BottomLine />
      </div>

      <div
        ref={ref}
        initial='hidden'
        animate={viewDiv && 'visible'}
        variants={sectionBodyAnimation}
      >
        <Slider {...settings}>
          {Reviews.map((review) => (
            <div key={review.id} className='mt-6 relative'>
              {/* <img
                src={review.img}
                alt='client'
                className='absolute top-0 right-20 w-36 h-36 mr-2'
                style={{ top: '-10%' }}
              /> */}
              <div
                className='mx-4 rounded-lg shadow-xl single-blog cursor-pointer pt-6 flex flex-col justify-between h-[250px]'
                style={{
                  maxWidth: '500px', // Set the maximum width
                  // backgroundColor: '#000000',
                  backgroundImage: `url(${mainbg})`, // Replace "your-image-url.jpg" with the URL of your background image
                  backgroundSize: 'cover', // You can adjust this based on your preference
                  backgroundPosition: 'center', // You can adjust this based on your preference
                  borderRadius: '40px',
                  border: '2px solid #fefb01',
                  marginTop: '5%',
                }}
              >
                <div
                  className='px-6'
                  style={{
                    marginTop: '10%',
                    paddingRight: '20%',
                  }}
                >
                  {/* <h2 className='text-left text-white text-2xl font-bold mb-2'>
                    {review.title}
                  </h2> */}
                  <p
                    className='text-left text-2xl text-gray-300 mb-4'
                    style={{ fontFamily: 'Caveat' }}
                  >
                    {review.description}
                  </p>
                  <h4
                    className='text-left'
                    style={{ color: '#f4940e', fontWeight: 'bold' }}
                  >
                    {review.buttonName}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Testimonial

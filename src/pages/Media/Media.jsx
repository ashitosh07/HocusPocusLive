import React, { useEffect, useRef, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import './Media.css'
import 'react-alice-carousel/lib/alice-carousel.css'
import Slide from './Slide'
import BottomLine from '../../components/BottomLine'
const Media = () => {
  const [mainIndex, setMainIndex] = useState(0)
  const carouselRef = useRef()

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext()
    }
  }

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev()
    }
  }

  useEffect(() => {
    let intervalId

    const handleSlideChange = () => {
      setMainIndex(carouselRef.current._activeIndex)
    }

    if (carouselRef.current) {
      carouselRef.current.onSlideChanged = handleSlideChange

      intervalId = setInterval(() => {
        slideNext()
      }, 5000) // Adjust the interval as needed (3000 milliseconds = 3 seconds)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [carouselRef])

  // Filter out only photo items
  const photoItems = Slide.filter((item) => item.type === 'photo').map(
    (item) => item.content
  )

  return (
    <div className='carousel' id='media'>
      <div className='mb-8'>
        <h1
          className='text-4xl font-semibold text-left text-white ml-8'
          style={{ color: '#fefb01' }}
        >
          MEDIA
        </h1>
        <BottomLine />
      </div>

      <AliceCarousel
        ref={carouselRef}
        disableDotsControls
        disableButtonsControls
        items={photoItems}
        buttonsDisabled
        autoPlay={false}
        stopAutoPlayOnHover={false}
      />

      {/* Customize Carousel Dots */}
      <div className='custom-dots'>
        {photoItems.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === mainIndex ? 'active' : ''}`}
          />
        ))}
      </div>

      <div className='btn-prev' onClick={slidePrev}>
        &lang;
      </div>
      <div className='btn-next' onClick={slideNext}>
        &rang;
      </div>

      {/* Render video items below the slideshow */}
      <div className='video-containerslideshow'>
        {Slide.filter((item) => item.type === 'video').map((item, index) => (
          <div key={index} className='video-itemslideshow'>
            {item.content}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Media

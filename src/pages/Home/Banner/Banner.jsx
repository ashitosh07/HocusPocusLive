import React, { useEffect, useState } from 'react'
import backgroundVideo from '../../../assets/HomepageBackground.mp4'
import logoImage from '../../../assets/logo.png'
import witchImage from '../../../assets/witch.png'
import flameGIF from '../../../assets/flame.gif'
import candle from '../../../assets/candle.png'
import './Banner.css'
const Banner = () => {
  const [showWitch, setShowWitch] = useState(false)
  const [showFlame, setShowFlame] = useState(false)

  const handleRightCenterClick = () => {
    console.log('Candle clicked')

    setTimeout(() => {
      setShowWitch(true)
    }, 1500)

    setTimeout(() => {
      setShowFlame(true)
    }, 100)
  }

  return (
    <>
      <div className='banner-container' id='home'>
        <video autoPlay loop muted className='video'>
          <source src={backgroundVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <img
          src={candle}
          alt='Small Chit'
          className='candle'
          onClick={handleRightCenterClick}
        />
        <div className='navbar'></div>
        <img src={logoImage} alt='Logo' className='logo' />
        {showWitch && (
          <img
            src={witchImage}
            alt='Witch'
            className='witch'
            style={{
              visibility: showWitch ? 'visible' : 'hidden',
              opacity: showWitch ? 1 : 0,
              transition: 'opacity 2s ease-in-out',
            }}
          />
        )}
        {showFlame && (
          <img
            src={flameGIF}
            alt='Flame'
            className='flame'
            style={{
              visibility: showFlame ? 'visible' : 'hidden',
              opacity: showFlame ? 1 : 0,
              transition: 'opacity 2s ease-in-out',
            }}
          />
        )}
      </div>
    </>
  )
}

export default Banner

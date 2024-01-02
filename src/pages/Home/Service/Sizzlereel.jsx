import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import mainbg from '../../../assets/mainbg.png'
import frameImg from '../../../assets/frameimg.png' // Replace with the path to your frame image
import placeholderVideo from '../../../assets/reel.mp4' // Replace with the path to your video
import './Sizzlereel.css'
const Sizzlereel = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    // Play the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play()
    }

    // Cleanup function to pause the video when the component is unmounted
    return () => {
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }
  }, [])

  const handleVideoEnded = () => {
    // When the video ends, pause it
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  const handleStopButtonClick = () => {
    // Pause the video without resetting the playback position
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  const handlePlayAgainButtonClick = () => {
    // Start the video from the beginning
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }
  const handlePlayButtonClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = false
      videoRef.current.play()
    }
  }

  const buttonStyle = {}

  return (
    <>
      <div
        className='parent py-10 relative'
        style={{
          backgroundImage: `url(${mainbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img src={frameImg} className='responsive-frame' alt='Frame' />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '20px',
          }}
        >
          <motion.video
            ref={videoRef}
            src={placeholderVideo}
            alt='Reel Video'
            loop={false}
            autoPlay={false}
            muted
            onEnded={handleVideoEnded}
            className='seezle'
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
            }}
          />
        </div>{' '}
        <div
          style={
            {
              // marginTop: '37%',
              // marginLeft: '35%',
            }
          }
          className='button'
        >
          <button onClick={handlePlayButtonClick} className='buttonStyle'>
            Play Video
          </button>
          <button onClick={handleStopButtonClick} className='buttonStyle'>
            Stop Video
          </button>
          <button onClick={handlePlayAgainButtonClick} className='buttonStyle'>
            Play Again
          </button>
        </div>
      </div>
    </>
  )
}

export default Sizzlereel

import React, { useEffect, useRef, useState } from 'react'
import './Reel.css'
import mainbg from '../../../assets/mainbg.png'
import frameImg from '../../../assets/frameimg.png'
import placeholderVideo from '../../../assets/reel.mp4'

function Reel() {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error('Autoplay prevented:', error)
        })
      }
    }

    // Play the video when the component mounts
    playVideo()

    // Cleanup function to pause the video when the component is unmounted
    return () => {
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }
  }, [])

  const handleToggleMute = () => {
    setMuted((prevMuted) => {
      if (videoRef.current) {
        videoRef.current.muted = !prevMuted
      }
      return !prevMuted
    })
  }

  return (
    <div
      className=' p-10 relative'
      style={{
        backgroundImage: `url(${mainbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      id='reel'
    >
      <img src={frameImg} className='frame' alt='Frame' />
      <div className='video-container'>
        <div className='video-item'>
          <div className='item'>
            <video
              ref={videoRef}
              width='100%'
              controls
              className='media'
              autoPlay
              // muted={muted} // Muted by default, toggle with a button
            >
              <source src={placeholderVideo} />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      {/* <button onClick={handleToggleMute} className='mute-toggle'>
        {muted ? 'Unmute' : 'Mute'}
      </button> */}
    </div>
  )
}

export default Reel

import React from 'react'
import backgroundVideo from '../../../assets/HomepageBackground.mp4'
import witchImage from '../../../assets/witch.png'
import './NewBanner.css' // Import the CSS file for styling

const NewBanner = () => {
  return (
    <div className='new-banner-container'>
      <video className='background-video' autoPlay loop muted>
        <source src={backgroundVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <img className='witch-image' src={witchImage} alt='Witch' />
    </div>
  )
}

export default NewBanner

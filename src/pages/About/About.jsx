import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import witches from './badges'
import mainbg from '../../assets/mainbg.png'
import './About.css'

const h1Styles = {
  color: '#fefb01',
  fontWeight: 'bold',
  fontSize: '36px',
}

const About = () => {
  const fontStyles = `
 @import url('https://fonts.googleapis.com/css2?family=Caveat&family=Inter:wght@300&family=Lexend:wght@100;200;300;400;500&family=Lobster+Two:wght@700&family=Londrina+Shadow&family=Mukta:wght@200&family=Mystery+Quest&family=Outfit&family=Poppins:ital,wght@0,200;0,300;1,200&family=Proza+Libre&family=Rubik+Doodle+Shadow&family=Staatliches&family=Syne:wght@400;800&display=swap');
 `

  const [textAlign, setTextAlign] = useState('center')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 540) {
        setTextAlign('left')
      } else {
        setTextAlign('center')
      }
    }

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize)

    // Initial setup
    handleResize()

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      style={{
        backgroundImage: `url(${mainbg})`,
      }}
      className='about'
      id='aboutSection'
    >
      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-1 gap-8'>
          <p
            style={{
              ...h1Styles,
              textAlign,
              fontFamily: 'LondrinaShadow',
              fontWeight: '1000',
            }}
          >
            ABOUT THE SHOW
          </p>
          <div className='centered-container'>
            <p
              className='text-neutral font-medium'
              style={{
                color: '#fefb01',
                fontFamily: 'LondrinaShadow',
                fontWeight: '1000',
              }}
            >
             The original production from the zany and creative mind of Summer Orlando is flying to a venue near you. This full length theatrical musical parody production based on the cult classic Disney film. A tribute production like no other filled with hilarious comedy, special effects, live singing, magic and surprises. 

BEWITCHING ALL AGE FRIENDLY SHOW FEATURING fantastic character look-alikes including New England’s #1 live singing Winifred Sanderson Impersonator Summer Orlando as seen in Disney’s “Hocus Pocus 2”! This show includes some of the most memorable characters and scenes from the Halloween cult classic.  Come in costume dressed as your favorite Sanderson sister for a chance to win some fabulous prizes. 

“It’s a Sanderson Sister takeover that’s sure to put a spell on you.” 

When asked “Why Hocus Pocus?”: Creator and director Summer Orlando said: “Hocus Pocus is a cult classic Disney phenomenon which is celebrating 31 years this year. It’s the go to Halloween movie for an entire generation AND has a huge LGBTQIA+ following thanks to the divine Bette Midler; its campy and its fun. Add some of our special brand of magic and you got yourself the #1 Halloween show to see this year.” 

  

If you think you’ve seen Hocus Pocus, you’ve never seen it like this! 

Now in its 8th year of sold-out performances.  This production has been performed for over 5000 people. HOCUS POCUS LIVE!!! has been given the stamp of approval by 5 original Cast members from the film including Kathy Najimy (Mary Sanderson),  Jordan Redmond (original angel), and Bette Midler herself, who says our Winifred looks just like her. 


            </p>
            <br />
            <br />
            <p
              className='text-neutral font-medium'
              style={{
                color: '#fefb01',
                fontFamily: 'LondrinaShadow',
                fontWeight: '1000',
                marginBottom: "95px",
                marginRight: "140px"
      }}
    >
    *We do not represent any licensed characters 
This show is a Parody and Tribute and in no way Affiliated to The Disney Company in any way.
            </p>
          </div>
        </div>
      </div>
      <style>{fontStyles}</style>
      <div
        className=' grid grid-cols-1 md:grid-cols-3 gap-8 relative '
        style={{ marginLeft: '70px' }}
      >
        {witches.map((witch, index) => (
          <div
            key={index}
            className='aboutwitch w-full md:w-1/3 '
            style={{
              width: '100%',
              position: 'relative',
              marginTop: '180px',
            }}
          >
            <div className='flex flex-col'>
              <img
                src={witch.icon}
                alt={witch.title}
                className='mx-auto'
                style={{
                  maxWidth: '40%', // Adjusted to 100% for better responsiveness
                  height: 'auto',
                  position: 'absolute',
                  bottom: 0,
                  left: '20px',
                }}
              />
              <h2 className='badge-title text-#8dce19 font-semibold'>
                {witch.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About

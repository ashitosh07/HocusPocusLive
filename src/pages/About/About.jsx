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
              The Original Production from the zany and creative mind of Summer
              Orlando!!! Summer Orlando Productions presents : HOCUS POCUS
              LIVE!!! A full length theatrical musical parody production based
              off the cult classic Disney film. A tribute production like no
              other filled with drag queens, special effects, live Singing,
              magic and surprises. BEWITCHING NEW SHOW Featuring fantastic
              character look a likes including New England's #1 live singing
              Winifred Sanderson Impersonator Summer Orlando as seen in Disney's
              "Hocus Pocus 2"!!!!. If you think you've seen Hocus Pocus, you've
              never seen it like this. The Halloween show of the Season, now in
              its 7th year of sold-out performances. Flying to a venue near you.
              Costumes, props, Theatrical set , and special effects included)
              and ask about our Family Friendly all ages version of the Show.
              NOW BOOKING FOR 2024 and beyond. This production has been
              performed for over 5000 people. . HOCUS POCUS LIVE!!! has been
              given the stamp of approval by 5 original Cast members from the
              film including Kathy Najimy (Mary Sanderson), Jordan Redmond
              (original angel), and Bette Midler herself says our Winifred looks
              just like her.
            </p>
            <br />
            <br />
            <p
              className='text-neutral font-medium'
              style={{
                color: '#fefb01',
                fontFamily: 'LondrinaShadow',
                fontWeight: '1000',
              }}
            >
              *We do not represent any licensed characters <br /> This show is a
              Parody and Tribute and in no way Affiliated to The Disney Company
              in any way.
            </p>
          </div>
        </div>
      </div>
      <style>{fontStyles}</style>
      <div
        className=' grid grid-cols-1 md:grid-cols-3 gap-8 relative '
        style={{ marginLeft: '80px' }}
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

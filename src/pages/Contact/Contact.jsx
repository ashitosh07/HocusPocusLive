import React, { useEffect, useRef, useState } from 'react'
import './Contact.css'
import '../../components/PrimaryBtn.css'
import '../shared/Shared.css'
import { motion, useAnimation } from 'framer-motion'
import { contactAnimation } from '../../hooks/useAnimation'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import mainbg from '../../assets/mainbg.png'
import bookTheShowImg from '../../assets/bookTheShowImg.png'
import witchImg from '../../assets/contactwitch.png'
import catImg from '../../assets/catImg.png'

const Contact = () => {
  const navigate = useNavigate()
  const form = useRef()
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [viewDiv, setViewDiv] = useState(false)
  const animation = useAnimation()
  const [state, setState] = useState({
    data: {
      firstName: '',
      email: '',
      phone: '',
      message: '',
      question: '',
    },
    errors: {},
  })

  useEffect(() => {
    if (inView) {
      setViewDiv(true)
    } else {
      setViewDiv(false)
    }
  }, [inView, animation])

  const handleSend = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_hhvkv5v', form.current, '_oE-UyMZh1i0VBa0t')
      .then(
        (result) => {
          console.log(result.text)
          // Reset the form fields after successful submission
          setState({
            data: {
              firstName: '',
              email: '',
              phone: '',
              message: '',
              question: '',
            },
            errors: {},
          })
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  const imageStyle = {
    width: '300px',
    height: 'auto',
    borderRadius: '50%',
    marginRight: '20px',
  }

  const offeringsStyle = {
    textAlign: 'left',
    marginTop: '20px',
  }

  const listItemStyle = {
    marginBottom: '8px',
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#f6ff00',
  }

  return (
    <div
      className='parent py-20 md:p-20 flex flex-col-reverse md:flex-row p-4'
      style={{
        backgroundImage: `url(${mainbg})`, // Replace "your-image-url.jpg" with the URL of your background image
        backgroundSize: 'cover', // You can adjust this based on your preference
        backgroundPosition: 'center', // You can adjust this based on your preference
        height: 'auto',
        width: '100%',
      }}
      id='contact'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 flex-col-reverse'>
        <div
          className=''
          ref={ref}
          initial='hidden'
          animate={viewDiv && 'visible'}
          variants={contactAnimation}
        >
          <div
            className='form-container'
            style={{
              borderRadius: '10px',
              backgroundColor: '#111111',
              backgroundImage: `url(${mainbg})`, // Replace "your-image-url.jpg" with the URL of your background image
              backgroundSize: 'cover', // You can adjust this based on your preference
              backgroundPosition: 'center', // You can adjust this based on your preference
            }}
          >
            <form
              ref={form}
              onSubmit={handleSend}
              style={{
                // border: '2px solid',
                borderImage:
                  'linear-gradient(to right, #0a0d0b, #1c3e2a, #237349, #22ad69, #12eb8b) 2 0',
              }}
            >
              <div className='form-group' style={{ marginBottom: '6px' }}>
                <label htmlFor='name'>First and Last Name</label>
                <input
                  className='input-field'
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Name'
                  required
                  style={{
                    color: 'black',
                    backgroundColor: 'white',
                  }}
                />
              </div>
              <div className='form-group' style={{ marginBottom: '6px' }}>
                <label htmlFor='email'>Email</label>
                <input
                  className='input-field'
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  required
                  style={{ color: 'black', backgroundColor: 'white' }}
                />
              </div>
              <div className='form-group' style={{ marginBottom: '6px' }}>
                <label htmlFor='phone'>Phone</label>
                <input
                  className='input-field'
                  type='text'
                  name='phone'
                  id='phone'
                  placeholder='Phone'
                  required
                  style={{ color: 'black', backgroundColor: 'white' }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='Description'>WHAT WOULD YOU LIKE TO DO?</label>
                <textarea
                  className='input-field'
                  name='message'
                  id='message'
                  cols='20'
                  rows='2'
                  placeholder='WHAT WOULD YOU LIKE TO DO?'
                  required
                  style={{ color: 'black', backgroundColor: 'white' }}
                ></textarea>
              </div>{' '}
              <div className='form-group'>
                <label htmlFor='Description'>
                  Ask A Question / Leave A Review
                </label>
                <textarea
                  className='input-field'
                  name='question'
                  id='question'
                  cols='30'
                  rows='2'
                  placeholder='   Ask A Question / Leave A Review'
                  required
                  style={{ color: 'black', backgroundColor: 'white' }}
                ></textarea>
                <button
                  type='submit'
                  style={{
                    backgroundColor: '#4CAF50',
                    color: 'black',
                    padding: '6px 25px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold',
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className='flex flex-col items-start justify-center p-6'
          initial={{ y: 50, opacity: 0 }}
          animate={viewDiv && 'visible'}
          variants={contactAnimation}
        >
          <img
            src={bookTheShowImg}
            alt='Book the Show'
            style={{
              marginBottom: '20px',
              width: 'auto', // Adjust the width as needed
              height: 'auto', // Adjust the height as needed
            }}
          />
          <div className='flex items-center'>
            <p
              className='text-1xl font-medium'
              style={{
                color: '#deff0a',
                fontFamily: 'sans-serif',
                marginBottom: '40px',
                fontWeight: 'bold',
              }}
            >
              Want to bring the show to your event or venue? Fill out the form
              to summon the Sanderson Sisters. No virgin needed.
            </p>

            <img
              src={catImg}
              alt='Cat'
              style={{
                width: '150px', // Adjust the width as needed
                height: 'auto', // Adjust the height as needed
              }}
            />
          </div>{' '}
          <div className='flex flex-col items-center md:flex-row'>
            <img src={witchImg} alt='Witch' style={imageStyle} />
            <div style={offeringsStyle}>
              <h2
                style={{
                  textDecoration: 'underline',
                  marginBottom: '10px',
                  fontSize: '24px',
                  color: '#ffea00',
                  fontFamily: 'sans-serif',
                }}
              >
                OFFERINGS
              </h2>
              <ul style={{ padding: '0', listStyleType: 'none' }}>
                <li style={listItemStyle}>Kid Friendly performances</li>
                <li style={listItemStyle}>General Audience performances</li>
                <li style={listItemStyle}>Sanderson Storytime</li>
                <li style={listItemStyle}>Meet and Greets</li>
                <li style={listItemStyle}>Baby Showers</li>
                <li style={listItemStyle}>Birthdays</li>
                <li style={listItemStyle}>Black Flame Bingo</li>
                <li style={listItemStyle}>Appearances</li>
                <li style={listItemStyle}>
                  Virtual video messages (Winnie's on Cameo)
                </li>
                <li style={listItemStyle}>
                  Public, Private, and corporate events
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

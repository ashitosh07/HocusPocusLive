import React, { useEffect, useRef, useState } from 'react'
import './Contact.css'
import '../../components/PrimaryBtn.css'
import '../shared/Shared.css'
import { motion, useAnimation } from 'framer-motion'

import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { contactAnimation } from '../../hooks/useAnimation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import Tabs from './Tabs'
const Userboard = () => {
  const navigate = useNavigate()
  const form = useRef()
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [viewDiv, setViewDiv] = useState(false)
  const animation = useAnimation()

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
      .sendForm(
        'itsproali_portfolio',
        'itsproali_portfolio',
        form.current,
        'H-ispiDvwdbG_76iq'
      )
      .then(
        (result) => {
          console.log(result.text)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Message has been sent',
            showConfirmButton: false,
            timer: 1500,
          })
          navigate('/')
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  return (
    <>
      <div className='bg-black'>
        <div className='max-w-7xl mx-auto lg:px-4'>
          <div className='parent py-20 md:p-20'>
            <div className='grid grid-cols-1 md:grid-cols-1 gap-8 mt-8'>
              <div
                className='p-2'
                ref={ref}
                initial='hidden'
                animate={viewDiv && 'visible'}
                variants={contactAnimation}
              >
                <div
                  className='form-container'
                  style={{
                    padding: '20px',
                    borderRadius: '10px',
                    backgroundColor: '#111111',
                  }}
                >
                  <form ref={form} onSubmit={handleSend}>
                    <h1
                      className='form-title lg:pr-80'
                      style={{ fontSize: '26px' }}
                    >
                      Lorem Ipsum has been the industry's standard dummy
                    </h1>
                    <div className='form-grid'>
                      <div className='form-group full-width'>
                        <label htmlFor='name'>Name</label>
                        <input
                          className='input-field'
                          type='text'
                          name='name'
                          id='name'
                          placeholder='Name'
                          required
                          style={{ backgroundColor: 'black' }}
                        />
                      </div>
                      <div className='form-group full-width'>
                        <label htmlFor='email'>Email</label>
                        <input
                          className='input-field'
                          type='email'
                          name='email'
                          id='email'
                          placeholder='Email'
                          required
                          style={{ backgroundColor: 'black' }}
                        />
                      </div>
                      <div className='form-group full-width'>
                        <label htmlFor='serviceType'>Service Type</label>
                        <select
                          className='input-field'
                          name='serviceType'
                          id='serviceType'
                          style={{ backgroundColor: 'black' }}
                        >
                          <option value='' disabled selected>
                            Select Service Type
                          </option>
                          <option value='service1'>Service 1</option>
                          <option value='service2'>Service 2</option>
                          <option value='service3'>Service 3</option>
                        </select>
                      </div>

                      <div className='form-group full-width'>
                        <label htmlFor='contact'>Contact</label>
                        <input
                          className='input-field'
                          type='text'
                          name='contact'
                          id='contact'
                          placeholder='Contact'
                          style={{ backgroundColor: 'black' }}
                        />
                      </div>
                    </div>

                    <div className='form-group address'>
                      <label htmlFor='address'>Address</label>
                      <input
                        className='input-field address-input' // Add a custom class for Address input
                        type='text'
                        name='address'
                        id='address'
                        placeholder='Address'
                        style={{ backgroundColor: 'black' }}
                      />
                    </div>
                    <div className='form-group upload-group'>
                      <label htmlFor='documentUpload' className='upload-label'>
                        <FontAwesomeIcon
                          icon={faUpload}
                          className='upload-icon'
                        />
                        Upload a Document
                      </label>
                      <input
                        className='input-field upload-input'
                        type='file'
                        name='documentUpload'
                        id='documentUpload'
                      />
                    </div>

                    <div className='form-group'>
                      <input
                        type='submit'
                        value='Submit'
                        className='submit-button'
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Tabs />
        </div>
      </div>
    </>
  )
}

export default Userboard

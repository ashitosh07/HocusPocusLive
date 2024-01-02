import React from 'react'
import { Link } from 'react-router-dom'
import { FaDownload } from 'react-icons/fa'
import { RiFolderInfoFill } from 'react-icons/ri'
import TypeAnimation from 'react-type-animation'
import { motion } from 'framer-motion'
import './Achievement.css'
import '../shared/Shared.css'

function Achievement() {
  const sections = [
    {
      imageSrc: price,
      title: 'Simply dummy text of the printing and',
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      animationDirection: 'left',
    },
    {
      imageSrc: price,
      title: 'Simply dummy text of the printing and',
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      animationDirection: 'right',
    },
    {
      imageSrc: price,
      title: 'Simply dummy text of the printing and',
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      animationDirection: 'left',
    },
    {
      imageSrc: price,
      title: 'Simply dummy text of the printing and',
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      animationDirection: 'right',
    },
  ]

  return (
    <>
      <div className='bg-black'>
        <div className='max-w-7xl mx-auto lg:px-4'>
          <div className='pt-20'>
            <div className='parent min-h-[90vh] flex flex-col items-center justify-around lg:flex-row'>
              {/* Image Column */}
              {/* Text Column */}
              <div className='w-full lg:w-1/2 p-4'>
                <div
                  initial={{ y: '-100vh' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className='texture font-semibold mb-4 lg:mb-6'>
                    Accurate financials.
                  </h1>
                  <h1 className='texture  font-semibold mb-4 lg:mb-6'>
                    Total peace
                  </h1>
                  <p
                    className='text-neutral max-w-xl mb-6 font-medium'
                    style={{ fontSize: '18px' }}
                  >
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-1/2 p-4'>
                <div
                  initial={{ y: '100vh' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1 }}
                  className='flex items-center justify-center'
                ></div>
              </div>
            </div>
            <div
              className='w-full h-[2px] '
              style={{ backgroundColor: '#E4E4E4', opacity: 0.2 }}
            ></div>
            <div className='w-full p-2 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto my-8 p-4'>
              <div
                initial={{ y: '100vh' }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                className='flex flex-col items-center justify-center'
              >
                <h1 className='texture-two font-semibold mb-2  text-center md:text-left'>
                  What you get with Bench
                </h1>
                <br />
                <p
                  className='text-neutral max-w-xl mb-6 font-medium text-center md:text-left'
                  style={{ fontSize: '18' }}
                >
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of
                  type.
                </p>
              </div>
            </div>
            {/*  */}
            <div className='parent min-h-[70vh] flex flex-col items-center justify-around lg:flex-row p-4'>
              {/* Image Column */}
              <div className='w-full lg:w-1/2 p-2'>
                <div
                  initial={{ x: '100vw' }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                  className='flex items-center justify-center'
                >
                  <img
                    src={price}
                    alt='Decorative'
                    className='w-full lg:w-3/4 h-auto mx-auto'
                  />
                </div>
              </div>

              {/* Text Column */}
              <div className='w-full lg:w-1/2 p-4'>
                <div
                  initial={{ x: '-100vw' }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className='text-2xl lg:text-5xl font-semibold mb-2 lg:mb-4 sm:text-3xl md:text-4xl'>
                    Simply dummy text of
                  </h1>

                  <h1 className='text-2xl lg:text-5xl font-semibold mb-2 lg:mb-4 sm:text-3xl md:text-4xl'>
                    the printing and
                  </h1>

                  <p className='text-neutral max-w-xl mb-6 font-medium text-sm sm:text-base md:text-base lg:text-base xl:text-base'>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className='parent min-h-[70vh] flex flex-col items-center justify-around lg:flex-row p-4'>
              {/* Text Column */}
              <div className='w-full lg:w-1/2 lg:pl-24 p-4'>
                <div
                  initial={{ x: '-100vw' }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className='text-2xl lg:text-5xl font-semibold mb-2 lg:mb-4 sm:text-3xl md:text-4xl'>
                    Simply dummy text of
                  </h1>

                  <h1 className='text-2xl lg:text-5xl font-semibold mb-2 lg:mb-4 sm:text-3xl md:text-4xl'>
                    the printing and
                  </h1>

                  <p className='text-neutral max-w-xl mb-6 font-medium text-sm sm:text-base md:text-base lg:text-base xl:text-base'>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled
                  </p>
                </div>
              </div>{' '}
              {/* Image Column */}
              <div className='w-full lg:w-1/2 p-2'>
                <div
                  initial={{ x: '100vw' }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                  className='flex items-center justify-center'
                >
                  <img
                    src={price}
                    alt='Decorative'
                    className='w-full lg:w-3/4 h-auto mx-auto'
                  />
                </div>
              </div>
            </div>
            {/*  */}
            <div className='parent min-h-[70vh] flex flex-col items-center justify-around lg:flex-row p-4'>
              {/* Image Column */}
              <div className='w-full lg:w-1/2 p-2'>
                <div
                  initial={{ x: '100vw' }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                  className='flex items-center justify-center'
                >
                  <img
                    src={price}
                    alt='Decorative'
                    className='w-full lg:w-3/4 h-auto mx-auto'
                  />
                </div>
              </div>

              {/* Text Column */}
              <div className='w-full lg:w-1/2 p-4'>
                <div
                  initial={{ x: '-100vw' }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className='text-2xl lg:text-5xl font-semibold mb-2 lg:mb-4 sm:text-3xl md:text-4xl'>
                    Simply dummy text of
                  </h1>

                  <h1 className='text-2xl lg:text-5xl font-semibold mb-2 lg:mb-4 sm:text-3xl md:text-4xl'>
                    the printing and
                  </h1>

                  <p className='text-neutral max-w-xl mb-6 font-medium text-sm sm:text-base md:text-base lg:text-base xl:text-base'>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className='parent min-h-[70vh] flex flex-col items-center justify-around lg:flex-row p-4'>
              {/* Text Column */}
              <div className='w-full lg:w-1/2 lg:pl-24 p-4'>
                <div
                  initial={{ x: '-100vw' }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className='text-2xl lg:text-5xl font-semibold mb-2 lg:mb-4 sm:text-3xl md:text-4xl'>
                    Simply dummy text of
                  </h1>

                  <h1 className='text-2xl lg:text-5xl font-semibold mb-2 lg:mb-4 sm:text-3xl md:text-4xl'>
                    the printing and
                  </h1>

                  <p className='text-neutral max-w-xl mb-6 font-medium text-sm sm:text-base md:text-base lg:text-base xl:text-base'>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled
                  </p>
                </div>
              </div>{' '}
              {/* Image Column */}
              <div className='w-full lg:w-1/2 p-2'>
                <div
                  initial={{ x: '100vw' }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                  className='flex items-center justify-center'
                >
                  <img
                    src={price}
                    alt='Decorative'
                    className='w-full lg:w-3/4 h-auto mx-auto'
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '30px',
                padding: '20px',
              }}
            >
              <div className='parent min-h-[90vh] flex flex-col lg:flex-row  items-center justify-between gap-8'>
                <div
                  className='w-full md:w-1/2 text-center'
                  initial={{ x: '100vw' }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                ></div>
                <div
                  initial={{ x: '-100vw' }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h3
                    className='text-4xl font-semibold mb-0'
                    style={{ color: '#060505', margin: '30px 0' }}
                  >
                    User Dashboard: Upload and Task Progress
                  </h3>

                  <p
                    className='text-neutral max-w-xl mb-6 font-medium'
                    style={{ color: '#000000', margin: '5% 0' }}
                  >
                    Access the full potential of our user dashboard, where
                    clients can effortlessly upload documents and monitor task
                    progress in real-time. Our secure document upload feature
                    ensures the confidentiality of your information, with
                    support for various file formats. The intuitive interface
                    guarantees a user-friendly experience, allowing you to
                    seamlessly navigate through the system and receive immediate
                    updates on task progress. With robust security measures,
                    including encryption and secure connections, your data is
                    safeguarded at every step. Guidelines for optimal use are
                    provided to assist you in organizing and managing your
                    documents effectively. If you need assistance, our support
                    team is just a message away, ensuring a smooth and secure
                    user experience.
                  </p>

                  <div className='lg:flex lg:flex-row flex-col items-center'>
                    <button
                      className='mb-2 mr-4 lg:mb-0 '
                      style={{
                        backgroundColor: '#8dce19',
                        borderRadius: '8px',
                        padding: '8px 20px',
                        color: '#000000',
                        fontWeight: '700',
                      }}
                    >
                      <span>Sign in</span>
                    </button>

                    <button
                      style={{
                        backgroundColor: '#000000',
                        borderRadius: '8px',
                        padding: '8px 20px',
                        color: '#FFFFFF',
                        fontWeight: '500',
                      }}
                    >
                      <span>Sign up</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Achievement

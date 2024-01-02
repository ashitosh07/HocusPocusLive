import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {
  FaCopy,
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa'

import { CopyToClipboard } from 'react-copy-to-clipboard'
const BlogDetail = ({ blogData }) => {
  const navigate = useNavigate()
  const { id } = useParams()

  const handleGoBack = () => {
    navigate(-1)
  }

  const currentBlog = blogData.find((blog) => blog.id === id)
  console.log(currentBlog)
  if (!currentBlog) {
    return <p>Blog not found</p>
  }
  const handleCopy = () => {}
  const {
    title,
    description,
    buttonName,
    name,
    bigImage,
    firstBigDescription,
    blockquote,
    secondImage,
    secondBigDescription,
    secondHeading,
    secondDescription,
  } = currentBlog

  return (
    <div className='mt-16 max-w-6xl mx-auto'>
      {/* Back Button */}
      <FontAwesomeIcon
        icon={faArrowLeft}
        style={{
          color: '#8dce19',
          fontSize: '30px',
          cursor: 'pointer',
          paddingLeft: '30px',
          marginBottom: '20px',
        }}
        onClick={handleGoBack}
      />

      {/* Title and Description */}
      <div className='mb-8' style={{ padding: '0 5%' }}>
        <h1 className='text-3xl mb-4'>{title}</h1>
        <p className='text-lg mb-6' style={{ color: 'gray' }}>
          {description}
        </p>
      </div>

      <div
        className='flex flex-row items-center justify-between mb-8'
        style={{ padding: '0 5%' }}
      >
        <button
          className='bg-blue-500 text-white px-4 py-1 rounded-md mb-4'
          style={{ borderRadius: '30px', backgroundColor: '#314809' }}
        >
          {buttonName}
        </button>
        <div className='flex items-center'>
          <p className='text-gray-600 mb-2' style={{ color: '#8dce19' }}>
            {name}
          </p>
        </div>
      </div>

      <img
        src={bigImage.src}
        alt='Big Blog Image'
        className='w-full h-auto rounded-md mb-8 p-8'
      />

      <div
        className='text-lg mb-6'
        style={{ padding: '0 5%', lineHeight: '1.6' }}
      >
        {firstBigDescription.map((paragraph, index) => (
          <div
            key={index}
            className='mb-6 text-left'
            style={{
              wordBreak: 'break-word',
              padding: '0 15%',
            }}
          >
            {paragraph}
          </div>
        ))}
      </div>

      <div className='flex flex-col items-center justify-center mt-10 p-4 text-center'>
        <div className='flex flex-col items-center'>
          <blockquote
            className='p-4 rounded-lg text-center italic border-l-2 border-green-500'
            style={{
              maxWidth: '100%',
              textAlign: 'left',
              padding: '5% 5%',
              lineHeight: '1.6',
            }}
          >
            {blockquote.quote}
            <p style={{ textAlign: 'left', marginTop: '10px' }}>
              {blockquote.cite}
            </p>
          </blockquote>
        </div>
      </div>

      <img
        src={secondImage.src}
        alt='Second Blog Image'
        className='w-full h-auto rounded-md mb-8 p-2'
        style={{ width: '80%', margin: 'auto' }}
      />

      <div
        className='text-lg mb-6'
        style={{
          padding: '0 15%',
          lineHeight: '1.6',
          margin: 'auto',
          marginTop: '10px',
        }}
      >
        {secondBigDescription.map((paragraph, index) => (
          <div
            key={index}
            className='mb-6 text-left'
            style={{
              wordBreak: 'break-word',
              padding: '0 5%',
            }}
          >
            {paragraph}
          </div>
        ))}
      </div>

      <h2
        className='text-2xl font-bold mb-4'
        style={{
          padding: '0 15%',
          lineHeight: '1.6',
          textAlign: 'left',
          marginLeft: '4%',
        }}
      >
        {secondHeading}
      </h2>

      <div
        className='text-lg mb-6'
        style={{ padding: '0 15%', lineHeight: '1.6' }}
      >
        {secondDescription.map((paragraph, index) => (
          <div
            key={index}
            className='mb-6 text-left'
            style={{
              wordBreak: 'break-word',
              padding: '0 5%',
            }}
          >
            {paragraph}
          </div>
        ))}
        <div
          className='w-full flex flex-col items-center pt-4 pb-4'
          style={{ alignItems: 'center' }}
        >
          <CopyToClipboard text='Text to be copied' onCopy={handleCopy}>
            <div className='inline-flex items-center cursor-pointer mb-2'>
              <div className='p-2 border border-white rounded-md mr-2'>
                <FaCopy className='text-1xl' style={{ color: '#8dce19' }} />
              </div>
              <span>Copy</span>
            </div>
          </CopyToClipboard>
          <div className='flex flex-row items-center mb-2'>
            <a
              className='inline-flex items-center mr-2'
              href='#'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='text-2xl' style={{ color: '#8dce19' }} />
              <span className='ml-1'>LinkedIn</span>
            </a>
            <a
              className='inline-flex items-center mr-2'
              href='#'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram className='text-2xl' style={{ color: '#8dce19' }} />
              <span className='ml-1'>Instagram</span>
            </a>
            <a
              className='inline-flex items-center'
              href='#'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook className='text-2xl' style={{ color: '#8dce19' }} />
              <span className='ml-1'>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail

import React, { useState } from 'react'

import blogcard1 from '../../assets/blog1.png'
import mainbg from '../../assets/mainbg.png'
import { Link } from 'react-router-dom'
import { allBlogDetailsData } from './BlogJson'

function BlogCard() {
  const [displayedData, setDisplayedData] = useState(
    allBlogDetailsData.slice(0, 6)
  )
  const [searchTerm, setSearchTerm] = useState('')

  const handleViewMore = () => {
    setDisplayedData(allBlogDetailsData)
  }

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    const filteredData = allBlogDetailsData.filter(
      (data) =>
        data.name.toLowerCase().includes(term) ||
        data.title.toLowerCase().includes(term) ||
        data.description.toLowerCase().includes(term)
    )
    setDisplayedData(filteredData)
  }

  return (
    <>
      {' '}
      <div
        style={{
          backgroundImage: `url(${mainbg})`, // Replace "your-image-url.jpg" with the URL of your background image
          backgroundSize: 'cover', // You can adjust this based on your preference
          backgroundPosition: 'center', // You can adjust this based on your preference
          padding: '20px',
          width: '100%',
        }}
        id='press'
      >
        <div className='max-w-8xl mx-auto lg:px-2'>
          <div className='flex flex-col items-center justify-center'>
            <h1
              className='text-4xl font-semibold mb-2 text-center p-4 pt-8'
              style={{ fontSize: '51.56px', color: '#fefb01' }}
            >
              PRESS / NEWS
            </h1>

            <div className='max-w-8xl mx-auto'>
              <div className='flex flex-wrap justify-center gap-16 mb-20 '>
                {displayedData.map((data, index) => (
                  <div
                    key={index}
                    className='bg-black p-6 rounded-md shadow-md text-left lg:w-96'
                    style={{
                      backgroundImage: `url(${mainbg})`, // Replace "your-image-url.jpg" with the URL of your background image
                      backgroundSize: 'cover', // You can adjust this based on your preference
                      backgroundPosition: 'center', // You can adjust this based on your preference
                    }}
                  >
                    {/* <img
                        src={data.bigImage.src}
                        alt={`Blog Image ${index + 1}`}
                        className='w-full h-auto rounded-md mb-4'
                      /> */}

                    {/* <div className='text-gray-500 mb-2'>{data.name}</div> */}
                    <div
                      className='text-white font-semibold text-1xl mb-2'
                      style={{ color: '#fefb01' }}
                    >
                      {data.title}
                    </div>
                    <p>
                      <a
                        href={data.href}
                        className='text-gray-400'
                        style={{ fontSize: '12px' }}
                      >
                        {data.description}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {displayedData.length < allBlogDetailsData.length && (
              <button
                className='text-white  px-4 py-2 rounded-md mb-24'
                onClick={handleViewMore}
                style={{ backgroundColor: '#8dce19' }}
              >
                View More
              </button>
            )}
          </div>{' '}
        </div>{' '}
      </div>
    </>
  )
}

export default BlogCard

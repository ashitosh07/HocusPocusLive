import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { contactAnimation } from '../../hooks/useAnimation'
import './Tabs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { cardData } from './TabsData'
function Tabs() {
  const [selectedTab, setSelectedTab] = useState('Ongoing')
  const [selectedCard, setSelectedCard] = useState(null)
  const [viewDiv, setViewDiv] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  const tabs = ['Old', 'Ongoing']

  // Set viewDiv based on inView
  if (inView && !viewDiv) {
    setViewDiv(true)
  }

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }

  const handleBackButtonClick = () => {
    setSelectedCard(null) // Reset selected card when clicking "Back"
  }

  return (
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
              backgroundColor: '#0a0a0a',
            }}
          >
            {/* Tabs */}
            <div className='tab-container'>
              {tabs.map((tab) => (
                <div
                  key={tab}
                  className={`tab ${selectedTab === tab ? 'active-tab' : ''}`}
                  onClick={() => {
                    setSelectedTab(tab)
                    setSelectedCard(null) // Reset selected card when changing tabs
                  }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </div>
              ))}
            </div>

            {/* Render content based on the selected tab */}
            {selectedCard ? (
              <div className='selected-card-details'>
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  style={{
                    color: '#8dce19',
                    fontSize: '30px',
                    cursor: 'pointer',

                    marginBottom: '20px',
                  }}
                  onClick={handleBackButtonClick}
                />
                <div className='details-grid'>
                  <div className='detail-first'>
                    <div className='detail-row'>
                      <div className='detail-label'>Application Date</div>
                      <div className='detail-value'>
                        {selectedCard.ApplicationDate}
                      </div>
                    </div>
                    <div className='detail-row'>
                      <div className='detail-label'>Application Status</div>
                      <div className='detail-value'>
                        {selectedCard.ApplicationStatus}
                      </div>
                    </div>
                  </div>

                  <hr
                    style={{
                      backgroundColor: '#E4E4E4',
                      opacity: 0.1,
                      margin: '20px 0',
                    }}
                  />

                  {/* Name, Email, and Contact details */}
                  <div className='detail-column'>
                    <div className='detail-row'>
                      <div className='detail-label'>Name</div>
                      <div className='detail-value'>{selectedCard.Name}</div>
                    </div>
                    <div className='detail-row'>
                      <div className='detail-label'>Email</div>
                      <div className='detail-value'>{selectedCard.Email}</div>
                    </div>
                    <div className='detail-row'>
                      <div className='detail-label'>Contact</div>
                      <div className='detail-value'>{selectedCard.Contact}</div>
                    </div>
                  </div>

                  {/* Address, Service Type, and Payment details */}
                  <div className='detail-column'>
                    <div className='detail-row'>
                      <div className='detail-label'>Address</div>
                      <div className='detail-value'>{selectedCard.Address}</div>
                    </div>
                    <div className='detail-row'>
                      <div className='detail-label'>Service Type</div>
                      <div className='detail-value'>
                        {selectedCard.ServiceType}
                      </div>
                    </div>
                    <div className='detail-row'>
                      <div className='detail-label'>Payment</div>
                      <div className='detail-value'>{selectedCard.Payment}</div>
                    </div>
                  </div>

                  <hr
                    style={{
                      backgroundColor: '#E4E4E4',
                      opacity: 0.1,
                      margin: '40px 0',
                    }}
                  />

                  <div className='detail-row'>
                    <div className='detail-value'>
                      {/* Replace the existing progress bar with the new status section */}
                      <div className='status-section'>
                        <h2 style={{ marginBottom: '10px' }}>
                          Status Application
                        </h2>
                        <div className='progress-bar'>
                          {/* Add your progress bar component or styles here */}
                          <div className='progress-bar-fill'></div>
                        </div>
                        <p>{selectedCard.ApplicationStatus}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className='card-container'>
                {cardData
                  .filter((card) => card.status === selectedTab)
                  .map((card, index) => (
                    <div
                      key={index}
                      onClick={() => handleCardClick(card)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '300px',
                        height: '130px',
                        margin: '10px',
                        // marginRight: '4px',
                        padding: '15px',
                        borderRadius: '10px',
                        backgroundColor: '#181818',
                        color: '#fff',
                        cursor: 'pointer', // Add cursor pointer for clickable effect
                      }}
                    >
                      {/* Dot indicator based on status */}
                      <div
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          marginBottom: '34px',
                          marginRight: '10px',
                          backgroundColor:
                            card.title === 'Pending' ? 'red' : ' #8dce19',
                        }}
                      ></div>

                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h2>{card.title}</h2>
                        <div style={{ marginTop: '10px' }}>
                          <p>{card.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tabs

import React from 'react'
import mainbg from '../../assets/mainbg.png'
import ticket from '../../assets/ticket.png'
import tickettitle from '../../assets/tickettitle.png'
import './Ticket.css'

const Ticket = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${mainbg})`,
        backgroundColor: 'white',
        borderRadius: '30px',
        padding: '0px 20px',
      }}
      id='gettickets'
    >
      <div className='parent min-h-[90vh] flex flex-col lg:flex-row items-center justify-between'>
        <div className='w-full md:w-1/2 text-center'>
          <img src={ticket} alt='Decorative' className='ticket' />
        </div>
        <div className='w-full md:w-1/2 text-center'>
          <img src={tickettitle} alt='Get Tickets' className='ticket-title' />

          <div className='event-details text-left mt-6 space-y-4 text-lg'>
            <p>
              <strong>Sept 20-21 - Warner Theatre, Torrington CT</strong>
            </p>

            <p>
              <strong>
                September 26-28 - An Evening of Hocus Pocus: A Spelltacular
                Cabaret, Salem, MA
              </strong>
              <br />
              <a
                href='https://www.cinemasalem.com/movie/an-evening-of-hocus-pocus-a-spelltacular-cabaret'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 underline'
              >
                Click here for tickets
              </a>
            </p>

            <p>
              <strong>October 30 - Palace Theatre, Waterbury CT</strong>
              <br />
              <a
                href='https://www.palacetheaterct.org/shows-and-events/main-stage/hocus-pocus-live-2025'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 underline'
              >
                Click here for tickets
              </a>
            </p>

            <p>
              <strong>November 1-2 - Garde Arts Center, New London CT</strong>
              <br />
              <a
                href='https://gardearts.org/events/hocus-pocus-live/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 underline'
              >
                Click for tickets
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket

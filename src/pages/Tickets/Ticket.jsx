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

          <div className='event-details'>
            <p>
              <strong>
                September 27 & 28 7pm - WARNER THEATER TORRINGTON CT
              </strong>
              <br />
              <a
                href='https://www.warnertheatre.org/events/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Click for tickets
              </a>
            </p>
            <p>
              <strong>
                October 4 & 5 7pm, 2pm, 7pm - CABARET ON MAIN EAST HAVEN CT
                (special immersive version)
              </strong>
              <br />
              <a
                href='https://cabaretonmain.ludus.com/index.php'
                target='_blank'
                rel='noopener noreferrer'
              >
                Click for tickets
              </a>
            </p>
            <p>
              <strong>October 26 8pm - PRIAM VINEYARDS COLCHESTER CT</strong>
              <br />
              <a
                href='https://www.priam-vineyards.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Click for tickets
              </a>
            </p>
            <p>
              <strong>
                October 30 7:30pm - PALACE THEATER WATERBURY CT sponsored by
                Apex Community Care (SEE THE WITCHES FLY LIVE ON STAGE!)
              </strong>
              <br />
              <a
                href='https://www.palacetheaterct.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Click for tickets
              </a>
            </p>
            <p>
              <strong>
                November 1 & 2 8pm & 11am - GARDE ARTS CENTER NEW LONDON CT (SEE
                THE WITCHES FLY LIVE ON STAGE!)
              </strong>
              <br />
              <a
                href='https://gardearts.org/events/hocus-pocus/'
                target='_blank'
                rel='noopener noreferrer'
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

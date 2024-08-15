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
                href='https://www.palacetheaterct.org/shows-and-events/main-stage/hocus-pocus-live?utm_content=bufferd5bf2&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer&fbclid=IwY2xjawEnNe9leHRuA2FlbQIxMAABHRbkt8iVXlCoHvpKHjywoG61z59ALwQIf9I00EBONf6Bj6RSrCL-qA_7yg_aem_R1liLiM6Vmiu6F_1qNBk0g'
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
            <p>
              <strong>
                The Salem Express: Revenge of the Sanderson Sisters train ride
                experience- September 20 &21 4:45 pm & 7:15 pm (Check in Times)
                each day.
              </strong>
              <br />
              <a
                href='https://essexsteamtrain.com/experiences-2/the-salem-express-revenge-of-the-sanderson-sisters/?fbclid=IwY2xjawEnMNtleHRuA2FlbQIxMAABHXQjpPY2E2kfhOXRKV-H3VNT13-e2kJC2pezvYI0ffXs1YREU6VYv6xWsw_aem_AXsXHmI6FGL6GeM9KC8g9Q'
                target='_blank'
                rel='noopener noreferrer'
              >
                Click for tickets
              </a>
            </p>{' '}
            <p>
              <strong>
                "Just a Brunch of Hocus Pocus"- Oct 20 Seating 11am showtime
                12pm.
              </strong>
              <br />
              <a
                href='https://essexsteamtrain.com/experiences-2/just-a-brunch-of-hocus-pocus/?fbclid=IwY2xjawEp6rRleHRuA2FlbQIxMAABHb1FpJA2NTs9PrrkeS8iSt3gsT0pkz-kj6HiLXszNYT9_rkiWqkfFb5sNA_aem_EdnChd9KNVQyWqAvYIQ9yQ'
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

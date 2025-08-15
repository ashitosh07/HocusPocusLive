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
  {/* <p>
              <strong>Sept 6 Essex CT The Salem Express: Revenge of the Sanderson Sisters</strong>
              <br />
              <a
                href='https://essexsteamtrain.com/experiences-2/the-salem-express-revenge-of-the-sanderson-sisters/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 underline'
              >
                Click here for tickets
              </a>
            </p>
              <p>
              <strong>Sept 7 Essex CT, Just a Brunch of Hocus Pocus </strong>
              <br />
              <a
                href='https://essexsteamtrain.com/experiences-2/just-a-brunch-of-hocus-pocus/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 underline'
              >
                Click here for tickets
              </a>
            </p>
              <p>
              <strong>Sept 13 Portland CT,  Hocus Pocus I need Wine to Focus</strong>
              <br />
              <a
                href='https://www.eventbrite.com/e/hocus-pocus-sanderson-sisters-drag-show-live-music-event-tickets-1289990228499?aff=oddtdtcreator&fbclid=IwY2xjawMIhZFleHRuA2FlbQIxMABicmlkETF4UVo3THJnRHZGNTdNQ1BlAR4HEYIEyqeVohaLpzFWdbSbR6sNSIz-HPq5D5HOLBg-Tln7_NlB8E5edW1alQ_aem_U_OAr6IllDMcvM9HOb5YoQ'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 underline'
              >
                Click here for tickets
              </a>
            </p>
            
            <p>
              <strong>Sept 20-21 - Warner Theatre, Torrington CT</strong>
              <br />
              <a
                href='https://www.warnertheatre.org/events/hocus-pocus-25/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 underline'
              >
                Click here for tickets
              </a>
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
            </p> */}
<p>
              <strong>October 4 Newtown CT, Hocus Pocus I need Wine to Focus </strong>
              <br />
              <a
                href='https://www.aquilasnestvineyards.com/service-page/hocus-pocus-need-wine-to-focus-drag-show?page=2&referral=service_list_widget'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 underline'
              >
                Click here for tickets
              </a>
            </p>
              <p>
              <strong>October 12 Bristol, CT  Just a Brunch of Hocus Pocus</strong>
              <br />
              <a
                href='https://www-1574r.bookeo.com/bookeo/b_carouselmuseum_start.html?ctlsrc2=uRXTMz1B3caaxSMoQy4SACGWTarZ5SPyY3TA3On66TA%3D&src=03v&type=415749E7L9L18D801951F4&fbclid=IwY2xjawLifm5leHRuA2FlbQIxMABicmlkETF2MWNFNE5WdTJUT1hUVm1yAR412pS2WBn6CG3bAaEEj4DLwOcofbqjwsztMb8lvY5-hcwAKfHH-N5slOtpdQ_aem_B6TDEwh2o2sSBisyiUzjGw'
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

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
      <div className='parent min-h-[90vh] flex flex-col lg:flex-row  items-center justify-between '>
        <div
          className='w-full md:w-1/2 text-center'
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={ticket}
            alt='Decorative'
            className='ticket'
            // style={{
            //   width: '63%',
            //   height: '100%',
            //   marginTop: '20px',
            // }}
          />
        </div>
        <div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={tickettitle} // Replace with your image path
            alt='Get Tickets'
            style={{ width: '100%', height: 'auto' }}
          />
          {/* <img src={tickettitle} alt='' /> */}
          {/* <p
            className='text-neutral max-w-xl mb-6 font-medium'
            style={{ color: '#000000', margin: '5% 0' }}
          >
            Access the full potential of our user dashboard, where clients can
            effortlessly upload documents and monitor task progress in
            real-time. Our secure document upload feature ensures the
            confidentiality of your information, with support for various file
            formats. The intuitive interface guarantees a user-friendly
            experience, allowing you to seamlessly navigate through the system
            and receive immediate updates on task progress. With robust security
            measures, including encryption and secure connections, your data is
            safeguarded at every step. Guidelines for optimal use are provided
            to assist you in organizing and managing your documents effectively.
            If you need assistance, our support team is just a message away,
            ensuring a smooth and secure user experience.
          </p> */}

          <div className='lg:flex lg:flex-row flex-col items-center'></div>
        </div>
      </div>
    </div>
  )
}

export default Ticket

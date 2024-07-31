import React from 'react'
import ClientLogos from '../assets/Clientslogos.png'
const Clients = () => {
  return (
    <>
  <div className="d-flex flex-column mb-3 justify-content-center align-items-center mx-5">
  <h2 className='Title'>Our CLients</h2>
  <p>We have been working with some Fortune 500+ clients</p>
  <div className="p-2">
    <img src={ClientLogos} alt="clients" className='Client-img' /></div>
  </div>
  </>
  )
}

export default Clients

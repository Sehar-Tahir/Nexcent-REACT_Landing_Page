import React from 'react'
import Vector from "../assets/Vector.png"
const Acheivements = () => {
  return (
    <div className="d-flex justify-content-evenly align-items-center my-3 mx-10">
          <div>
          <h2>Helping a local</h2>
          <h2><span>business reinvent itself</span></h2>
          <p>We reached here with our hard work and dedication</p>
          </div>
<div className="d-flex flex-column">
          <div className="d-flex justify-content-evenly align-items-center my-3 mx-10 gap-3">
          <img src={Vector} alt="" />
          <div className='d-flex flex-column'>
           <h4 className='fw-bold'>2,245,341</h4>
           <p>Members</p>
          </div>

          <img src={Vector} alt="" />
          <div className='d-flex flex-column'>
           <h4 className='fw-bold'>46,328</h4>
           <p>Clubs</p>
          </div>
          </div>

          <div className="d-flex justify-content-evenly align-items-center my-3 mx-10 gap-3">
          <img src={Vector} alt="" />
          <div className='d-flex flex-column'>
           <h4 className='fw-bold'>828,867</h4>
           <p>Event Bookings</p>
          </div>

          <img src={Vector} alt="" />
          <div className='d-flex flex-column'>
           <h4 className='fw-bold'>1,926,436</h4>
           <p>Payments</p>
          </div>
          </div>
          </div>



        </div>
  )
}

export default Acheivements


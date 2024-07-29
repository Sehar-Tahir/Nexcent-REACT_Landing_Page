import React from 'react'
import Logo from "../assets/Logo.png"
import SocialLinks from "../assets/SocialLinks.png"

const Footer = () => {
  return (
    <>
    <footer className='h-628px'>
    <div className="d-flex flex-column mb-3 justify-content-center align-items-center mt-3">
  <h1 className='fw-bold'>Pellentesque suscipit fringilla libero eu.</h1>
  <h1 className='fw-bold'>fringilla libero eu.</h1>
  <button className="btn btn-success">Get a Demo</button>
  </div>


    <div className="d-flex flex-row  justify-content-evenly align-items-center gap-10 bg-black mt-3 p-3 ">

    <div className='d-flex flex-column gap-1 text-white'>
     <img src={Logo} alt="" />
     <p className='mt-3'>Copyright © 2020 Nexcent ltd.</p>
     <p>All rights reserved</p>
     <img src={SocialLinks} alt="" />
     </div>

    <div className='d-flex flex-column text-white'>
     <h4>Company</h4>
     <ul>
      <li>About Us</li>
      <li>Blogs</li>
      <li>Contact Us</li>
      <li>Pricing</li>
      <li>Testimonials</li>
     </ul>
    </div>

    <div className='d-flex flex-column text-white'>
     <h4>Support</h4>
     <ul>
      <li>Help Center</li>
      <li>Terms of service</li>
      <li>Legal</li>
      <li>Privacy policy</li>
      <li>Status</li>
     </ul>
    </div>

    <div className='d-flex flex-column text-white justify-content-start align-items-start'>
     <h4>Stay Up to date</h4>
    <input type="email" name="" id="" placeholder='Your email address'/>
    </div>


  </div>
  </footer>
  </>
  )
}

export default Footer

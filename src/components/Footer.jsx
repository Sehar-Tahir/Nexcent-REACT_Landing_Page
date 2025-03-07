import React from 'react'
import Logo from "../assets/Logo.png"
import SocialLinks from "../assets/SocialLinks.png"

const Footer = () => {
  return (
    <>
    <footer className='h-628px mt-3'>
    <div className="d-flex flex-column mb-3 justify-content-center align-items-center mt-3">
  <h1 className='Title'>Pellentesque suscipit fringilla libero eu.</h1>
  <h1 className='Title'>fringilla libero eu.</h1>
  <button className="button">Get a Demo</button>
  </div>


    <div className="d-flex flex-row  justify-content-evenly align-items-center gap-10 bg-black mt-3 p-3 sm-flex-column">

    <div className='d-flex flex-column gap-1 text-white footer-Section'>
     <img src={Logo} alt="" />
     <p className='mt-3'>Copyright © 2020 Nexcent ltd. <br /> All rights reserved</p>
     <img src={SocialLinks} alt="" />
     </div>

    <div className='d-flex flex-column part'>
     <h4 className='Title'>Company</h4>
     <ul className='list-unstyled'>
      <li>About Us</li>
      <li>Blogs</li>
      <li>Contact Us</li>
      <li>Pricing</li>
      <li>Testimonials</li>
     </ul>
    </div>

    <div className='d-flex flex-column part'>
     <h4 className='Title'>Support</h4>
     <ul className='list-unstyled'>
      <li>Help Center</li>
      <li>Terms of service</li>
      <li>Legal</li>
      <li>Privacy policy</li>
      <li>Status</li>
     </ul>
    </div>

    <div className='d-flex flex-column text-white justify-content-start align-items-start'>
     <h4 className='Title part'>Stay Up to date</h4>
    <input type="email" name="" id="" placeholder='Your email address'/>
    </div>


  </div>
  </footer>
  </>
  )
}

export default Footer

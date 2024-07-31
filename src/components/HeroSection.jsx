import React from 'react'
import Illustration from '../assets/Illustration.png'
import Dot from '../assets/Dot.png'
const HeroSection = () => {
  return (
    <main className='HeroSection'>
        <div className="d-flex flex-row justify-content-evenly my-3 mx-10 ">
          <div>
            <h1 className='Title'>Lessons & Insights</h1>
            <h1 className='Title'><span>from 8 years</span></h1>
            <p>Where to grow your Business as a photographer: site or social media</p>
            <button className="button">Register</button>
          </div>
          <img src={Illustration} alt="" className="hero-image"/>
        </div>

        <div className="d-flex align-items-center justify-content-center mb-3 ">
        <img src={Dot} alt="" />
        </div>
    </main>
  )
}


export default HeroSection

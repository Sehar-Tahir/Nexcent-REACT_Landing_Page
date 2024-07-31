import React from 'react'
import Image from '../assets/image.png'
import Customer from "../assets/Customer.png"
const Customers = () => {
  return (
    <div className="d-flex justify-content-evenly align-items-center gap-3 Customers">
          <img src={Image} alt="" />

          <div className='d-flex flex-column'> 
            <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
            <h5><span>Tim Smith</span></h5>
            <p>British Dragon Boat Racing Association</p>

            <div className='d-flex gap-3'>
                  <img src={Customer} alt="" />
                  <h5 className='mt-2'><span>Meet all Customers</span></h5>
            </div>
          </div>
        </div>
  )
}

export default Customers

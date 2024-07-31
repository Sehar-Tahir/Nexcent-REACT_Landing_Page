import React from 'react'
import Frame from '../assets/Frame.png'

const Pixelgrade = () => {
  return (
      <div className="d-flex justify-content-evenly align-items-center Pixelgrade">
          <img src={Frame} alt="" />
          <div>
          <h2>The unseen of spending three years at Pixelgrade</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed sit amet justo ipsum.Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio. </p>
            <button className="button">Learn More</button>
          </div>
        </div>
  )
}

export default Pixelgrade

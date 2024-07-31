import React from 'react'
import Img1 from "../assets/Img1.png"
import Img2 from "../assets/Img2.png"
import Img3 from "../assets/Img3.png"
const Marketing = () => {
  return (
    <>
    <div className="d-flex flex-column mb-3 justify-content-center align-items-center mt-3 Section">
  <h2 className='Title'>Caring is the new marketing</h2>
  <p className='text-center Marketing-text'>The Nexcent blog is the best place to read about the latest membership insights, 
  trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
  </div>

    <div className="d-flex flex-row mb-3 justify-content-center align-items-center gap-10 Cards">

    <div className="p-2 Card">
      <img src={Img1} alt="" />
    </div>
    
    <div className="p-2 Card">
      <img src={Img2} alt="" />
    </div>

    <div className="p-2 Card">
      <img src={Img3} alt="" />
    </div>
  </div>
  </>
  )
}

export default Marketing

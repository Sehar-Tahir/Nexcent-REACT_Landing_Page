import React from 'react'
import Icon from "../assets/Icon.png"
const Community = () => {
  return (
    <>
    <div className="d-flex flex-column mb-3 justify-content-center align-items-center Community">
  <h2 className='Title'>Manage your entire community in a single system</h2>
  <p>Who is Nextcent suitable for?</p>
  {/* </div> */}

    <div className="d-flex justify-content-center align-items-center community-boxes">
    <div className="p-2">
      <img src={Icon} alt="" />
      <h3 className='box'>Membership Organisations</h3>
      <p>Our membership management software provides full automation of membership renewals and payments</p>
    </div>

    <div className="p-2">
      <img src={Icon} alt="" />
      <h3 className='box'>National Associations</h3>
      <p>Our membership management software provides full automation of membership renewals and payments</p>
    </div>

    <div className="p-2">
      <img src={Icon} alt="" />
      <h3 className='box'>Clubs & Groups</h3>
      <p>Our membership management software provides full automation of membership renewals and payments</p>
    </div>
  </div>
  </div>
  </>
  )
}

export default Community

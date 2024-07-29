import React from 'react'
import Icon from "../assets/Icon.png"
const Community = () => {
  return (
    <>
    <div className="d-flex flex-column mb-3 justify-content-center align-items-center mt-3">
  <h2 className='fw-bold'>Manage your entire community in a single system</h2>
  <p>Who is Nextcent suitable for?</p>
  </div>

    <div className="d-flex justify-content-center align-items-center gap-3 m-3 p-3">
    <div className="p-2">
      <img src={Icon} alt="" />
      <h3>Membership Organisations</h3>
      <p>Our membership management software provides full automation of membership renewals and payments</p>
    </div>

    <div className="p-2">
      <img src={Icon} alt="" />
      <h3>National Associations</h3>
      <p>Our membership management software provides full automation of membership renewals and payments</p>
    </div>

    <div className="p-2">
      <img src={Icon} alt="" />
      <h3>Clubs & Groups</h3>
      <p>Our membership management software provides full automation of membership renewals and payments</p>
    </div>
  </div>
  </>
  )
}

export default Community

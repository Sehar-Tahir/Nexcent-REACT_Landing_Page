import Logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
<>
<nav className="navbar navbar-expand-lg bg-light p-3 d-flex justify-content-between">
<img src={Logo} alt="logo" className= "navbar-brand"  />
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse flex-grow-0 " id="navbarNav">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="nav-link" to="/about">About Us</NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="nav-link" to="/service">Services</NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
        </li>
          <a className="nav-link active" aria-current="page" href="#"><span>Login</span></a>
         </ul>
      <button className="button" type="submit">Sign UP</button>
  </div>
</nav>
</>
  )
}

export default Navbar

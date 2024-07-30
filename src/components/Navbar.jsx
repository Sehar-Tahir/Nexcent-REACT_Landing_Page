import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light p-3">
  <div className="container-fluid mb-3">
        <img src={Logo} alt="logo" className= "navbar-brand"  />
    <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mr-8">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/service">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><span>Login</span></a>
        </li>
          </ul>
        <button className="btn btn-success">Sign UP</button>
    </div>
  </div>
</nav>
  )
}

export default Navbar

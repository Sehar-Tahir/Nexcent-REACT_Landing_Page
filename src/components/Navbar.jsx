import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light p-3 d-flex justify-content-between">
    <img src={Logo} alt="logo" className= "navbar-brand"  />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
        <ul className="navbar-nav mr-auto">
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
          
          <button className="btn btn-success my-2 my-sm-0" type="submit">Sign UP</button>
      </div>
    </nav>
    </>
    
  )
}

export default Navbar

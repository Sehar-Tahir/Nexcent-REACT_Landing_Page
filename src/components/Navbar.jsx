import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
        <img src={Logo} alt="logo" className= "navbar-brand"  />
    <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mr-8">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Community</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Pricing</a>
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

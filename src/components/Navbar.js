import React from 'react'
// import 'boostrap/dist/boostrap.css';
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <h4><a className="navbar-brand" href="#">  Jobs Here <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
</svg> </a> </h4>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about"> About Us</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/ListofJobs"> Lists of Jobs</NavLink>

        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login"> Login</NavLink>

        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup"> Sign Up</NavLink>

        </li>
        
        
        

        
      </ul>
      
    </div>
  </div>
  
</nav>
        </>
    )
}

export default Navbar
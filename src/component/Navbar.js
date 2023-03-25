import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light  justify-content-between">
        <div className='justify-content-start'>
          <h1>Poertfolio.</h1>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bg-light"></span>

        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className='nav-item'><Link to="" >Home</Link></li>
            <li className='nav-item'><Link to="#about" >About</Link></li>
            <li className='nav-item'><Link to="#portfolio" >Portfolio</Link></li>
            <li className='nav-item pr-3'><Link to="#contact" >Contact</Link></li>
          </ul>
        </div>

      </nav>
    </>
  )
}

export default Navbar
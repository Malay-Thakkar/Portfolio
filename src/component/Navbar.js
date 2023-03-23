import React from 'react'

const Navbar = () => {

  return (
    <>
    
      <nav class="navbar navbar-expand-lg navbar-light  justify-content-between">
        <div className='justify-content-start'>
          <h1>Poertfolio.</h1>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon bg-light"></span> 
        
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li className='nav-item'>Home</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>Service</li>
            <li className='nav-item'>Portfolio</li>
            <li className='nav-item'>Testimonial</li>
            <li className='nav-item pr-3'>Contect</li>
          </ul>
        </div>

      </nav>
    </>
  )
}

export default Navbar
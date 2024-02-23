import React from 'react'

const Navbar = () => {



    
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">My store</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">SmartPhones</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Laptops</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Perfumes</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Skincare</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Grocery</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Home decoration</a>
      </li>
 
    </ul>
  </div>
</nav>
  )
}

export default Navbar

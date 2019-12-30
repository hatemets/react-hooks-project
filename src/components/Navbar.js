import React, { useEffect } from 'react'
import M from 'materialize-css'

const Navbar = () => {
  useEffect(() => {
    let elements = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elements)
  }, [])

  const navLinks = <div>
    <li><a href="/#">Home</a></li>
    <li><a href="/#">Profile</a></li>
    <li><a href="/#">New Post</a></li>
    </div>

  return (
    <header>
      <nav className="navbar blue darken-2">
        <div className="container">
          <a href="/#" className="brand-logo">Dog Food</a>
          <a href="/#" className="sidenav-trigger" data-target="mobile-nav">
            <i className="material-icons">menu</i>
          </a>

          <ul className="right hide-on-med-and-down">
            {navLinks}
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-nav">
        {navLinks}
      </ul>
    </header>
  )
}

export default Navbar
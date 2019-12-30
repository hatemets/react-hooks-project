import React, { useEffect } from 'react'
import M from 'materialize-css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    let elements = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elements)
  }, [])

  const navLinks = <div>
    <li><Link to='/' className="sidenav-close">Home</Link></li>
    <li><Link to='/' className="sidenav-close">Profile</Link></li>
    <li><Link to='/new_post' className="sidenav-close">New Post</Link></li>
    </div>

  return (
    <header>
      <nav className="navbar blue darken-2">
        <div className="container">
          <Link to='/' className="brand-logo">Dog Food</Link>
          <Link to='/' className="sidenav-trigger" data-target="mobile-nav">
            <i className="material-icons">menu</i>
          </Link>

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
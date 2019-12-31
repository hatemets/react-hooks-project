import React, { useEffect, useContext } from 'react'
import M from 'materialize-css'
import { Link } from 'react-router-dom';
import { themeContext } from '../contexts/ThemeContext'

const Navbar = () => {
  const {theme: genTheme} = useContext(themeContext);
  const theme = genTheme.isLight ? genTheme.light : genTheme.dark;
  document.body.style = `background: ${theme.bg}`


  useEffect(() => {
    let elements = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elements)
  }, [])

  const navLinks = <div>
    <li><Link to='/' className="sidenav-close" Style={`color: ${theme.text}`}>Home</Link></li>
    <li><Link to='/' className="sidenav-close" Style={`color: ${theme.text}`}>Profile</Link></li>
    <li><Link to='/new_post' className="sidenav-close" Style={`color: ${theme.text}`}>New Post</Link></li>
    </div>

  return (
    <header>
      <nav className="navbar" Style={`background-color: ${theme.els}`}>
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

      <ul className="sidenav" id="mobile-nav" Style={`background-color: ${theme.els}`}>
        {navLinks}
      </ul>
    </header>
  )
}

export default Navbar
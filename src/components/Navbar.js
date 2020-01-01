import React, { useEffect, useContext } from 'react'
import M from 'materialize-css'
import { Link } from 'react-router-dom';
import { themeContext } from '../contexts/ThemeContext'

const Navbar = () => {
  const {theme: genTheme, dispatch} = useContext(themeContext);
  const theme = genTheme.isLight ? genTheme.light : genTheme.dark;
  document.body.style = `background: ${theme.bg}`
  
  useEffect(() => {
    let elements = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elements);
  }, [])

  const handleClick = () => {
    dispatch({type: 'CHANGE_THEME'})
  }

  const navLinks = <div>
      <li><Link to='/' className="sidenav-close" Style={`color: ${theme.text}`}>Home</Link></li>
      <li><Link to='/' className="sidenav-close" Style={`color: ${theme.text}`}>Profile</Link></li>
      <li><Link to='/new_post' className="sidenav-close" Style={`color: ${theme.text}`}>New Post</Link></li>
      <div className="container row">
        <li><button onClick={handleClick} className="hoverable col btn-floating grey darken-4"></button></li>
        <li><button onClick={handleClick} className="hoverable col btn-floating white"></button></li>
      </div>
    </div>

  return (
    <header>
      <nav className="navbar" Style={`background-color: ${theme.els}`}>
        <div className="container">
          <Link to='/' className="brand-logo" Style={`color: ${theme.text}`}>Dog Food</Link>
          <Link to='/' className="sidenav-trigger" data-target="mobile-nav">
            <i className="material-icons">menu</i>
          </Link>

          <ul className="right hide-on-med-and-down">
            <li><Link to='/' className="sidenav-close" Style={`color: ${theme.text}`}>Home</Link></li>
            <li><Link to='/' className="sidenav-close" Style={`color: ${theme.text}`}>Profile</Link></li>
            <li><Link to='/new_post' className="sidenav-close" Style={`color: ${theme.text}`}>New Post</Link></li>
            <li><button onClick={handleClick} className="hoverable col btn-floating grey darken-4"></button></li>
            <li><button onClick={handleClick} className="hoverable col btn-floating white"></button></li>
          </ul>
          <button onClick={handleClick} className="mobile-theme-btn hide-on-large-only right col btn-floating white"></button>
          <button onClick={handleClick} className="mobile-theme-btn hide-on-large-only right col btn-floating grey darken-4"></button>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-nav" Style={`background-color: ${theme.els}`}>
        <li><Link to='/' className="sidenav-close" Style={`color: ${theme.text}`}>Home</Link></li>
        <li><Link to='/' className="sidenav-close" Style={`color: ${theme.text}`}>Profile</Link></li>
        <li><Link to='/new_post' className="sidenav-close" Style={`color: ${theme.text}`}>New Post</Link></li>
        <div className="container row">
        </div>
      </ul>
    </header>
  )
}

export default Navbar
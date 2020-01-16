import React, { useEffect, useContext } from 'react'
import M from 'materialize-css'
import { Link } from 'react-router-dom';
import { themeContext } from '../../contexts/ThemeContext'
import AccountLinks from './AccountLinks';

const Navbar = () => {
  const {theme, dispatch} = useContext(themeContext);
  const t = theme.isLight ? theme.light : theme.dark;
  document.body.style = `background: ${t.bg}`

  useEffect(() => {
    let elements = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elements);
  }, [])

  const handleClick = (e) => {
    dispatch({type: 'CHANGE_THEME', color: e.target.id})
  }

  return (
    <header>
      <nav className="navbar" Style={`background-color: ${t.els}`}>
        <div className="container">
          <Link to='/' className="brand-logo hide-on-small-only" Style={`color: ${t.text}`}>Dog Food</Link>
          <Link to='/' className="sidenav-trigger" data-target="mobile-nav">
            <i className="material-icons" Style={`color: ${t.text}`}>menu</i>
          </Link>

          <ul className="right hide-on-med-and-down">
            <AccountLinks />
            <li><button id="dark" onClick={handleClick} className="hoverable col btn-floating grey darken-4"></button></li>
            <li><button id="light" onClick={handleClick} className="hoverable col btn-floating white"></button></li>
          </ul>
          <button id="light" onClick={handleClick} className="mobile-theme-btn hide-on-large-only right col btn-floating white"></button>
          <button id="dark" onClick={handleClick} className="mobile-theme-btn hide-on-large-only right col btn-floating grey darken-4"></button>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-nav" Style={`background-color: ${t.els}`}>
        <AccountLinks />
      </ul>
    </header>
  )
}

export default Navbar
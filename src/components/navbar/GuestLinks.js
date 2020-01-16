import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { themeContext } from '../../contexts/ThemeContext'

const GuestLinks = () => {
  const {theme} = useContext(themeContext);
  const t = theme.isLight ? theme.light : theme.dark;

  return [
    <li key="home"><Link to='/' className="sidenav-close" Style={`color: ${t.text}`}>Home</Link></li>,
    <li key="signin"><Link to='/signin' className="sidenav-close" Style={`color: ${t.text}`}>Sign In</Link></li>,
    <li key="register"><Link to='/register' className="sidenav-close" Style={`color: ${t.text}`}>Register</Link></li>
  ]
}

export default GuestLinks
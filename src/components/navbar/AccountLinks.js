import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { themeContext } from '../../contexts/ThemeContext'

const AccountLinks = () => {
  const {theme} = useContext(themeContext);
  const t = theme.isLight ? theme.light : theme.dark;

  return [
      <li key="home"><Link to='/' className="sidenav-close" Style={`color: ${t.text}`}>Home</Link></li>,
      <li key="profile"><Link to='/profile' className="sidenav-close" Style={`color: ${t.text}`}>Profile</Link></li>,
      <li key="newpost"><Link to='/new_post' className="sidenav-close" Style={`color: ${t.text}`}>New Post</Link></li>
    ]
}

export default AccountLinks;
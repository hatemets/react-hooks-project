import React, { useContext } from 'react'
import { themeContext } from '../contexts/ThemeContext'

const Profile = () => {
  const {theme: genTheme} = useContext(themeContext)
  const theme = genTheme.isLight ? genTheme.light : genTheme.dark;
  let themeText = `color: ${theme.text}`;
  let themeBackground = `background: ${theme.els}`;

  return (
    <div id="profile" className="container row" Style={`${themeText}; ${themeBackground}`}>

        <img className="profile-pic col s10 offset-s1 m6 responsive-img" src={require('../media/resort.jpg')} alt="profile pic"/>

        <div className="col m6 s12">
            <form className="row">
              <p className="col flow-text offset-s4">Profile Info</p>

              <div className="col offset-s1 s10 input-field">
                <input type="text" value="Mark Heidmets" Style={themeText}/>
                <label className="active" Style={themeText}>Username</label>
              </div>

              <div className="col offset-s1 s10 input-field">
                <input type="text" value="mark.heidmets@gmail.com" Style={themeText}/>
                <label className="active" Style={themeText}>Email</label>
              </div>

              <div className="col offset-s1 s10 input-field">
                <input disabled type="text" value="12/09/2015" Style={themeText}/>
                <label className="active" Style={themeText}>Registration date</label>
              </div>

            </form>
        </div>

    </div>
  )
}

export default Profile
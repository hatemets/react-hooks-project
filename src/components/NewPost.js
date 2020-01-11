import React, { useState, useContext } from 'react'
import { postContext } from '../contexts/PostContext'
import { themeContext } from '../contexts/ThemeContext'
import { date } from '../resources/time'

const NewPost = (props) => {
  const {dispatch} = useContext(postContext)
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');
  const {theme: genTheme} = useContext(themeContext)
  const theme = genTheme.isLight ? genTheme.light : genTheme.dark;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_POST', post: {title, body, date}});
    props.history.push('/');
    setBody('');
    setTitle('');
  }

  return (
    <div className="container">
      <form id="new-post" className="z-depth-2 hoverable" onSubmit={handleSubmit} Style={`background: ${theme.els}`}>

        <div className="row container center-align new-post-inputs">

          <p className="flow-text" Style={`color: ${theme.text}`}>Create a new post</p>

          <div className="input-field col s10 offset-s1">
            <input Style={`color: ${theme.text}`} required id="title" Style={`color: ${theme.text}`} type="text" onChange={(e) => {setTitle(e.target.value)}}/>
            <label htmlFor="title" Style={`color: ${theme.text}`}>Title</label>
          </div>

          <div className="input-field col s10 offset-s1">
            <textarea Style={`color: ${theme.text}`} Style={`color: ${theme.text}`} required id="content" className="materialize-textarea" onChange={(e) => {setBody(e.target.value)}} type="text"/>
            <label htmlFor="content" Style={`color: ${theme.text}`}>Content</label>
          </div>

          <button type="submit" className="btn green">add post</button>

        </div>

      </form>
    </div>
  )
}

export default NewPost
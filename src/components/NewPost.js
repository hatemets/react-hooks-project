import React, { useState, useContext } from 'react'
import { postContext } from '../contexts/PostContext'
import { themeContext } from '../contexts/ThemeContext'

const NewPost = (props) => {
  const {dispatch} = useContext(postContext)
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');
  const {theme: genTheme} = useContext(themeContext)
  const theme = genTheme.isLight ? genTheme.light : genTheme.dark;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_POST', post: {title, body}});
    props.history.push('/');
    setBody('');
    setTitle('');
  }

  return (
    <div className="container center white z-depth-2 hoverable">
      <form id="new-post" onSubmit={handleSubmit} Style={`background: ${theme.els}`}>

        <div className="row container new-post-inputs">

          <p className="flow-text col offset-s4" Style={`color: ${theme.text}`}>Create a new post</p>

          <div className="input-field col s10 offset-s1">
            <input Style={`color: ${theme.text}`} required id="title" type="text" onChange={(e) => {setTitle(e.target.value)}}/>
            <label htmlFor="title">Title</label>
          </div>

          <div className="input-field col s10 offset-s1">
            <textarea Style={`color: ${theme.text}`} required id="content" className="materialize-textarea" onChange={(e) => {setBody(e.target.value)}} type="text"/>
            <label htmlFor="content">Content</label>
          </div>

          <button type="submit" className="btn green col s6 m3 offset-s3 offset-m5">add post</button>

        </div>

      </form>
    </div>
  )
}

export default NewPost
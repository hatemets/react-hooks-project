import React, { useState, useContext } from 'react'
import { postContext } from '../contexts/PostContext'
import { themeContext } from '../contexts/ThemeContext'

const ModifyPost = (props) => {
  let id = Number(props.match.params.post_id);
  const {posts, dispatch} = useContext(postContext);
  const [post] = posts.filter(post => Number(post.id) === Number(id))

  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const {theme: genTheme} = useContext(themeContext)
  const theme = genTheme.isLight ? genTheme.light : genTheme.dark;

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: 'REMOVE_POST', id})
    dispatch({type: 'ADD_POST', post: {title, body, id}});
    props.history.push('/');
  }

  return (
    <div className="container center z-depth-2 hoverable" Style={`background: ${theme.els}; color: ${theme.text}`}>
      <form onSubmit={handleSubmit}>

        <div className="row container new-post-inputs">

          <p className="flow-text col offset-s4">Modify your post</p>

          <div className="input-field col s10 offset-s1" >
            <input placeholder="Title" value={title} Style={`color: ${theme.text}`} required id="title" type="text" onChange={(e) => {setTitle(e.target.value)}}/>
          </div>

          <div className="input-field col s10 offset-s1">
            <textarea placeholder="Content" value={body} Style={`color: ${theme.text}`} required id="content" className="materialize-textarea" onChange={(e) => {setBody(e.target.value)}} type="text"/>
          </div>

          <div className="col offset-s4">
            <button type="submit" className="btn yellow darken-3">submit changes</button>
          </div>

        </div>

      </form>
    </div>
  )
}

export default ModifyPost
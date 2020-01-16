import React, { useState, useContext } from 'react'
import { postContext } from '../contexts/PostContext'
import { themeContext } from '../contexts/ThemeContext'
import { date } from '../resources/time'

const ModifyPost = (props) => {
  let id = Number(props.match.params.post_id);
  const {posts, dispatch} = useContext(postContext);
  const [post] = posts.filter(post => Number(post.id) === Number(id))

  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const {theme} = useContext(themeContext);
  const t = theme.isLight ? theme.light : theme.dark;

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: 'REMOVE_POST', id})
    dispatch({type: 'ADD_POST', post: {title, body, id, date}});
    props.history.push('/');
  }

  return (
    <div id="modify" className="container center z-depth-2 hoverable" Style={`background: ${t.els}; color: ${t.text}`}>
      <form onSubmit={handleSubmit}>

        <div className="row container new-post-inputs">

          <p className="flow-text">Modify your post</p>

          <div className="input-field col s10 offset-s1" >
            <input placeholder="Title" value={title} Style={`color: ${t.text}`} required id="title" type="text" onChange={(e) => {setTitle(e.target.value)}}/>
            <label className="active">Title</label>
          </div>

          <div className="input-field col s10 offset-s1">
            <textarea placeholder="Content" value={body} Style={`color: ${t.text}`} required id="content" className="materialize-textarea" onChange={(e) => {setBody(e.target.value)}} type="text"/>
            <label className="active">Content</label>
          </div>

          <button type="submit" className="col s4 m2 offset-m5 offset-s4 btn yellow darken-3">submit</button>

        </div>

      </form>
    </div>
  )
}

export default ModifyPost
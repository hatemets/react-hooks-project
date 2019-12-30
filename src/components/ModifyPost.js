import React, { useState, useContext } from 'react'
import { postContext } from '../contexts/PostContext'

const ModifyPost = (props) => {
  let id = Number(props.match.params.post_id);
  const {posts, dispatch} = useContext(postContext);
  const [post] = posts.filter(post => post.id !== id)
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: 'REMOVE_POST', id})
    dispatch({type: 'ADD_POST', post: {title, body, id}});
    props.history.push('/');
  }

  return (
    <div className="container center white z-depth-2 hoverable">
      <form onSubmit={handleSubmit}>

        <div className="row container new-post-inputs">

          <p className="flow-text col offset-s4">Modify your post</p>

          <div className="input-field col s10 offset-s1">
            <input value={title} required id="title" type="text" onChange={(e) => {setTitle(e.target.value)}}/>
            <label htmlFor="title">Title</label>
          </div>

          <div className="input-field col s10 offset-s1">
            <textarea value={body} required id="content" className="materialize-textarea" onChange={(e) => {setBody(e.target.value)}} type="text"/>
            <label htmlFor="content">Content</label>
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
import React, { useContext, useReducer } from 'react'
import { postContext } from '../contexts/PostContext'


const PostDetails = (props) => {
  let id = Number(props.match.params.post_id);
  const {posts} = useContext(postContext);
  const [post] = posts.filter(post => post.id === id)

  return (
    <div className="container center">
      <div className="card hoverable center post" key={post.id}>
        <div className="card-content">
          <span className="card-title">{post.title}</span>
          <p>{post.body}</p>
        </div>
        <div className="card-action">
          <button className="btn red waves-effect waves-light">delete post</button>
        </div>
      </div>
    </div>
  )
}

export default PostDetails
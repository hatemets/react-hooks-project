import React, { useContext } from 'react'
import { postContext } from '../contexts/PostContext'


const PostDetails = (props) => {
  let id = Number(props.match.params.post_id);
  const {posts, dispatch} = useContext(postContext);
  const [post] = posts.filter(post => Number(post.id) === id)

  const handleClick = () => {
    dispatch({type: 'REMOVE_POST', id})
    props.history.push('/')
  }

  return (
    <div className="container center">
      <div className="card hoverable center post" key={post.id}>
        <div className="card-content">
          <span className="card-title">{post.title}</span>
          <p>{post.body}</p>
        </div>
        <div className="card-action">
          <button onClick={handleClick} className="btn red waves-effect waves-light">delete post</button>
        </div>
      </div>
    </div>
  )
}

export default PostDetails
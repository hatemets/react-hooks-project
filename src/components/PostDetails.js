import React, { useContext } from 'react'
import { postContext } from '../contexts/PostContext'
import { Link } from 'react-router-dom';


const PostDetails = (props) => {
  let id = Number(props.match.params.post_id);
  const {posts, dispatch} = useContext(postContext);
  const [post] = posts.filter(post => Number(post.id) === id)

  const handleDelete = () => {
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
          <button onClick={handleDelete} className="btn red darken-2 waves-effect waves-light">delete</button>
          <Link to={`/${post.id}/modify_post`} className="btn yellow darken-3 waves-effect waves-light">modify</Link>
        </div>
      </div>
    </div>
  )
}

export default PostDetails
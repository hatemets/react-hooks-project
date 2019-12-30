import React, { useContext } from 'react'
import { postContext } from '../contexts/PostContext'
import { Link } from 'react-router-dom'

const Home = (props) => {
  const {posts} = useContext(postContext)

  const postList = posts.length ? posts.map(post =>
    <div className="card hoverable center post" key={post.id}>
      <div className="card-content">
        <span className="card-title"><Link to={`/${post.id}`}>{post.title}</Link></span>
        <p>{post.body}</p>
      </div>
    </div>
    ) : <div className="container">
          <p className="flow-text">There are currently no posts</p>
          <Link to='/new_post' className="btn green pulse">Create new post</Link>
        </div>

  return (
    <div className="container center">
      {postList}
    </div>
  )
}

export default Home
import React, { useContext } from 'react'
import { postContext } from '../contexts/PostContext'

const Home = (props) => {
  const {posts} = useContext(postContext)
  console.log(posts);

  const postList = posts.length ? posts.map(post =>
    <div className="card hoverable center" key={post.id}>
      <div className="card-content">
        <span className="card-title"><a href="/#">{post.title}</a></span>
        <p>{post.body}</p>
      </div>
    </div>
    ) : <div className="container"><p className="flow-text">There are currently no posts</p></div>

  return (
    <div className="container center">
      <h1>Posts</h1>
      {postList}
    </div>
  )
}

export default Home
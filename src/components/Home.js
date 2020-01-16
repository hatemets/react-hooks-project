import React, { useContext } from 'react'
import { postContext } from '../contexts/PostContext'
import { themeContext } from '../contexts/ThemeContext'
import { Link } from 'react-router-dom'

const Home = (props) => {
  const {posts} = useContext(postContext)
  const {theme} = useContext(themeContext)
  const t = theme.isLight ? theme.light : theme.dark;
  posts.sort((a, b) => b.novelty - a.novelty);

  const postList = posts.length ? posts.map(post =>
    <div className="card hoverable center post" key={post.id} Style={`color: ${t.text}; background: ${t.els}`}>
      <div className="card-content">
        <span className="card-title"><Link to={`/${post.id}`} Style={`color: ${t.text}`}>{post.title}</Link></span>
        <p>{post.body}</p>
        <br/>
        <p>Latest change: {post.date}</p>
      </div>
    </div>
    ) : <div className="container">
          <p className="flow-text" Style={`color: ${t.text}`}>There are currently no posts</p>
          <Link to='/new_post' className="btn green pulse">Create new post</Link>
        </div>

  return (
    <div className="container center">
      {postList}
    </div>
  )
}

export default Home
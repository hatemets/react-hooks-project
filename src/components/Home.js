import React, { useContext } from 'react'
import { postContext } from '../contexts/PostContext'
import { themeContext } from '../contexts/ThemeContext'
import { Link } from 'react-router-dom'

const Home = (props) => {
  const {posts} = useContext(postContext)
  const {theme: genTheme} = useContext(themeContext)
  const theme = genTheme.isLight ? genTheme.light : genTheme.dark;

  const postList = posts.length ? posts.map(post =>
    <div className="card hoverable center post" key={post.id} Style={`color: ${theme.text}`}>
      <div className="card-content" Style={`background: ${theme.els}`}>
        <span className="card-title"><Link to={`/${post.id}`} Style={`color: ${theme.text}`}>{post.title}</Link></span>
        <p>{post.body}</p>
      </div>
    </div>
    ) : <div className="container">
          <p className="flow-text" Style={`color: ${theme.text}`}>There are currently no posts</p>
          <Link to='/new_post' className="btn green pulse">Create new post</Link>
        </div>

  return (
    <div className="container center">
      {postList}
    </div>
  )
}

export default Home
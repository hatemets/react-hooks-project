import React from 'react'
import Home from './components/Home'
import Navbar from './components/navbar/Navbar'
import PostContextProvider from './contexts/PostContext'
import ThemeContextProvider from './contexts/ThemeContext'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PostDetails from './components/PostDetails'
import NewPost from './components/NewPost'
import ModifyPost from './components/ModifyPost'
import Profile from './components/Profile'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeContextProvider>
          <Navbar />
          <TransitionGroup>
            <CSSTransition timeout={400} className="fade">
              <PostContextProvider>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/new_post' component={NewPost} />
                  <Route path='/profile' component={Profile} />
                  <Route path='/:post_id/modify_post' component={ModifyPost} />
                  <Route path='/:post_id' component={PostDetails} />
                </Switch>
              </PostContextProvider>
            </CSSTransition>
          </TransitionGroup>
        </ThemeContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

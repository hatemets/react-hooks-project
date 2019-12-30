import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PostContextProvider from './contexts/PostContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PostDetails from './components/PostDetails';
import NewPost from './components/NewPost';
import ModifyPost from './components/ModifyPost';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <PostContextProvider>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/new_post' component={NewPost} />
            <Route path='/:post_id/modify_post' component={ModifyPost} />
            <Route path='/:post_id' component={PostDetails} />
            </Switch>
          </PostContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

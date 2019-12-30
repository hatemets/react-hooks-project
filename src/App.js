import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PostContextProvider from './contexts/PostContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PostDetails from './components/PostDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <PostContextProvider>
            <Route exact path='/' component={Home} />
            <Route path='/:post_id' component={PostDetails} />
          </PostContextProvider>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

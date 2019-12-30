import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PostContextProvider from './contexts/PostContext';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PostContextProvider>
        <Home />
      </PostContextProvider>
    </div>
  );
}

export default App;

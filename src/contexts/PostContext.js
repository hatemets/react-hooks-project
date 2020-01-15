import React, { createContext, useReducer, useEffect } from 'react'
import rootReducer from '../reducers/RootReducer'

export const postContext = createContext();

const PostContextProvider = (props) => {
  const [posts, dispatch] = useReducer(rootReducer, [], () => {
    const localData = localStorage.getItem('posts');
    return localData ? JSON.parse(localData) : [];
  })

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  })

  return (
    <postContext.Provider value={{posts, dispatch}}>
      {props.children}
    </postContext.Provider>
  )
}

export default PostContextProvider
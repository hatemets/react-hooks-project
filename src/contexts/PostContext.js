import React, { createContext, useReducer } from 'react'
import rootReducer from '../reducers/RootReducer'

export const postContext = createContext();

const PostContextProvider = (props) => {
  const [posts, dispatch] = useReducer(rootReducer, [])

  return (
    <postContext.Provider value={{posts, dispatch}}>
      {props.children}
    </postContext.Provider>
  )
}

export default PostContextProvider
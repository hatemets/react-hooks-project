import React, { createContext, useReducer } from 'react'
import rootReducer from '../reducers/RootReducer'

export const postContext = createContext();

const PostContextProvider = (props) => {
  const [posts, dispatch] = useReducer(rootReducer, [
    {id: 1, title: "First post", body: "Deserunt labore esse Lorem consequat adipisicing. Velit in aliqua est amet amet non enim et. Consectetur nostrud nisi reprehenderit pariatur qui voluptate aliqua velit aliquip do cupidatat enim. Minim incididunt deserunt dolore in deserunt. Eiusmod pariatur qui id do consequat voluptate dolor anim labore magna. Eu nulla consectetur consequat ad dolor esse ipsum sit aute voluptate quis eu."}
  ])

  return (
    <postContext.Provider value={{posts, dispatch}}>
      {props.children}
    </postContext.Provider>
  )
}

export default PostContextProvider
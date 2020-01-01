import React, { createContext, useReducer } from 'react'
import rootReducer from '../reducers/RootReducer'

export const themeContext = createContext();

const ThemeContextProvider = (props) => {
    const [theme, dispatch] = useReducer(rootReducer, {
        isLight: false,
        light: {bg: '#ddd', text: '#000', els: '#b5bfbf'},
        dark: {bg: '#333', text: '#fff', els: '#555'}
    })

    return (
        <themeContext.Provider value={{theme, dispatch}}>
            {props.children}
        </themeContext.Provider>
    )
}

export default ThemeContextProvider
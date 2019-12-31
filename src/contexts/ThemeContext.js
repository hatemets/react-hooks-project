import React, { createContext, useState } from 'react'
import rootReducer from '../reducers/RootReducer'

export const themeContext = createContext();

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState({
        isLight: false,
        light: {bg: '#ddd', text: '#000', els: '#ccc'},
        dark: {bg: '#333', text: '#fff', els: '#555'}
    })

    return (
        <themeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </themeContext.Provider>
    )
}

export default ThemeContextProvider
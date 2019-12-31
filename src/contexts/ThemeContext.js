import React, { createContext, useReducer } from 'react'
import rootReducer from '../reducers/RootReducer'

const themeContext = createContext();

const ThemeContextProvider = (props) => {
    const [themes, setTheme] = useReducer(rootReducer, [])

    return (
        <themeContext.Provider value={{themes, setTheme}}>
            {props.children}
        </themeContext.Provider>
    )
}

export default ThemeContextProvider
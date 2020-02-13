import React, { createContext, useReducer, useEffect } from 'react'
import rootReducer from '../reducers/RootReducer'
import { themes } from '../resources/themes'

export const themeContext = createContext();

const ThemeContextProvider = (props) => {
    const {light, dark} = themes;
    const [theme, dispatch] = useReducer(rootReducer, {
        isLight: false,
        light,
        dark
    }, () => {
        let localColor = JSON.parse(localStorage.getItem('themeColor'));
        let localData = {light, dark, isLight: localColor};
        return localData ? localData : {light, dark, isLight: true};
    })

    useEffect(() => {
        localStorage.setItem('themeColor', theme.isLight)
    })

    return (
        <themeContext.Provider value={{theme, dispatch}}>
            {props.children}
        </themeContext.Provider>
    )
}

export default ThemeContextProvider
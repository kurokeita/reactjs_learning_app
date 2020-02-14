import React from 'react'

export const themes = {
    light: {
        theme: 'light',
        button: 'Button-dark',
        background: 'App-background-greydark'
    },
    dark: {
        theme: 'dark',
        button: 'Button-light',
        background: 'App-background-dark'
    }
}

export const ThemeContext = React.createContext({
    theme: themes.light,
    themeToggle: () => { }
})

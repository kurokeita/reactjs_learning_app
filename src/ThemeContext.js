import React from 'react'

export const themes = {
    light: {
        button: 'Button-dark',
        background: 'App-background-greydark'
    },
    dark: {
        button: 'Button-light',
        background: 'App-background-dark'
    }
}

export const ThemeContext = React.createContext({
    theme: themes.light,
    themeToggle: () => {}
})

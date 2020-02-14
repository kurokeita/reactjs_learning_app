import React, { useState, useContext } from 'react'
import Text from './Text'
import { ThemeContext } from '../Context/ThemeContext'
import Button from 'react-bootstrap/Button'

function Toggle() {
    const [toggleState, setToggleState] = useState(false)
    const theme = useContext(ThemeContext)

    async function handleClick() {
        setToggleState(!toggleState)
    }

    const button = (
        <Button variant={theme.theme.theme === 'dark' ? 'light' : 'secondary'} onClick={() => {
            handleClick().then(theme.themeToggle())
        }}>
            {theme.theme.theme === 'light' ? 'Light' : 'Dark'}
        </Button>
    )

    return (
        <div>
            <p>{button}</p>
            <Text toggle={toggleState} />
        </div>
    )
}

export default Toggle

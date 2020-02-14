import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

function LoginLogout(props) {
    const [loginState, setLoginState] = useState(false)

    function handleClick(e) {
        let name = e.target.name
        let status = (name === 'login')
        let username = (status === true) ? 'kurokeita' : ''
        setLoginState(status)
        props.loggedInStatus(status, username)
    }

    let button
    if (!loginState) {
        button = <Button className="mb-3" variant="primary" name="login" onClick={handleClick}>Log in</Button>
    } else {
        button = <Button className="mb-3" variant="danger" name="logout" onClick={handleClick}>Log out</Button>
    }

    return (
        <div>
            {button}
        </div>
    )
}

export default LoginLogout

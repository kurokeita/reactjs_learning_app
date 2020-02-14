import React, { useState } from 'react'
// import {ThemeContext} from './ThemeContext'
import Button from 'react-bootstrap/Button'
// const axios = require('axios')

// class LoginLogout extends React.Component {
//     static contextType = ThemeContext
//     constructor(props) {
//         super(props)
//         this.state = {
//             isLoggedIn: false
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//
//     handleClick(e) {
//         let name = e.target.name
//         let status = (name === 'login')
//         let username = (status === true) ? 'kurokeita' : ''
//         this.setState({
//             isLoggedIn: status,
//         })
//         this.props.loggedInStatus(status, username)
//         // axios.request({
//         //     url: 'http://kurokeita.ddns.net:38080/api/test',
//         //     headers: {
//         //         'Access-Control-Allow-Origin': '*',
//         //     },
//         //     method: 'get'
//         // }).then((res) => {
//         //     console.log(res)
//         // })
//     }
//
//     render() {
//         let button
//         if (!this.state.isLoggedIn) {
//             button = <Button className="mb-3" variant="primary" name="login" onClick={this.handleClick}>Log in</Button>
//         } else {
//             button = <Button className="mb-3" variant="danger" name="logout" onClick={this.handleClick}>Log out</Button>
//         }
//
//         return(
//             <div>
//                 {button}
//             </div>
//         )
//     }
// }

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

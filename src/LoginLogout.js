import React from 'react'
import {ThemeContext} from './ThemeContext'

class LoginLogout extends React.Component {
    static contextType = ThemeContext
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }        
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        let name = e.target.name
        let status = (name === 'login') ? true : false
        let username = (status === true) ? 'kurokeita' : ''
        this.setState({
            isLoggedIn: status,
        })
        this.props.loggedInStatus(status, username)
    }

    render() {
        let button
        console.log(this.context)
        if (!this.state.isLoggedIn) {
            button = <button className={this.context.theme.button} name="login" onClick={this.handleClick}>Log in</button>
        } else {
            button = <button className={this.context.theme.button} name="logout" onClick={this.handleClick}>Log out</button>
        }

        return(
            <div>
                {button}
            </div>
        )
    }
}

export default LoginLogout

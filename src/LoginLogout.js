import React from 'react'
import Data from './Data'

class LoginLogout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }

        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }

    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        })
    }

    handleLogoutClick() {
        this.setState({
            isLoggedIn: false  
        })
    }

    render() {
        let button
        if (!this.state.isLoggedIn) {
            button = <button onClick={this.handleLoginClick}>Log in</button>
        } else {
            button = <button onClick={this.handleLogoutClick}>Log out</button>
        }

        return(
            <div>
                {button}
                <Data isLoggedIn={this.state.isLoggedIn} name="kurokeita" />
            </div>
        )
    }
}

export default LoginLogout

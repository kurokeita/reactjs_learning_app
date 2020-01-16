import React from 'react'

class LoginLogout extends React.Component {
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
        this.setState({
            isLoggedIn: status
        })
        this.props.loggedInStatus(status)
    }

    render() {
        let button
        if (!this.state.isLoggedIn) {
            button = <button name="login" onClick={this.handleClick}>Log in</button>
        } else {
            button = <button name="logout" onClick={this.handleClick}>Log out</button>
        }

        return(
            <div>
                {button}
            </div>
        )
    }
}

export default LoginLogout

import React from 'react'
import logo from './logo.svg'
import Time from './Time'
import LoginLogout from './LoginLogout'
import Data from './Data'
import './App.css'

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
        this.handleLoggedInStatus = this.handleLoggedInStatus.bind(this)
    }

    handleLoggedInStatus(status) {
        this.setState({
            isLoggedIn: status
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <p>
                        <Time interval='1000'/>
                        <br/>
                        {/* <Time interval='2000'/> */}
                        {/*<br/>*/}
                        {/*<Time interval='5000'/>*/}
                    </p>
                    <LoginLogout loggedInStatus={this.handleLoggedInStatus}/>
                    <Data isLoggedIn={this.state.isLoggedIn} />
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        )
    }
}

export default App

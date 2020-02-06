import React from 'react'
import logo from './logo.svg'
import Time from './Time'
import LoginLogout from './LoginLogout'
import Data from './Data'
import './App.css'
import {ThemeContext, themes} from './ThemeContext'
import Button from 'react-bootstrap/Button'

class App extends React.Component{
    constructor(props) {
        super(props)

        this.themeToggle = () => {
            this.setState(state => ({
                theme: state.theme === 'dark' ? 'light' : 'dark',
                username: ''
            }))
        }

        this.state = {
            isLoggedIn: false,
            name: '',
            theme: 'dark'
        }
        this.handleLoggedInStatus = this.handleLoggedInStatus.bind(this)
        this.handleTheme = this.handleTheme.bind(this)
        this.changeName = this.changeName.bind(this)
    }

    handleLoggedInStatus(status, username) {
        this.setState({
            isLoggedIn: status,
            username: username
        })
    }

    handleTheme() {
        this.setState({
            theme: (this.state.theme === 'dark') ? 'light' : 'dark'
        })
    }

    changeName(username) {
        this.setState({
            username: username
        })
    }

    render() {
        return (
            <ThemeContext.Provider value={{theme:themes[this.state.theme], themeToggle: this.themeToggle}}>
                <div className="App">
                    <React.StrictMode>
                    <header className={"App-header " + themes[this.state.theme].background}>
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
                        <Button className="mb-3" variant={this.state.theme === 'dark' ? 'light' : 'secondary'} onClick={this.handleTheme}>Change theme</Button>
                        <LoginLogout loggedInStatus={this.handleLoggedInStatus}/>
                        <Data isLoggedIn={this.state.isLoggedIn} name={this.state.username} changeName={this.changeName} />
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                    </React.StrictMode>
                </div>
            </ThemeContext.Provider>
        )
    }
}

export default App

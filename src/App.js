import React from 'react'
import logo from './logo.svg'
import Time from './Time'
import LoginLogout from './LoginLogout'
import Data from './Data'
import './App.css'
import {ThemeContext, themes} from './ThemeContext'

class App extends React.Component{
    static contextType = ThemeContext
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            name: '',
            theme: 'light'
        }
        this.handleLoggedInStatus = this.handleLoggedInStatus.bind(this)
        this.handleTheme = this.handleTheme.bind(this)
    }

    handleLoggedInStatus(status, name) {
        this.setState({
            isLoggedIn: status,
            name: name
        })
    }

    handleTheme() {
        this.setState({
            theme: (this.state.theme === 'dark') ? 'light' : 'dark'
        })
    }

    render() {
        // console.log(this.state.theme)
        console.log(this.context)
        console.log(themes[this.state.theme])
        return (
            <ThemeContext.Provider value={themes[this.state.theme]}>
                <div className="App">
                    <React.StrictMode>
                    <header className={"App-header " + this.context.background}>
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
                        <button className={this.context.button} onClick={this.handleTheme}>Change theme</button>
                        <LoginLogout loggedInStatus={this.handleLoggedInStatus}/>
                        <Data isLoggedIn={this.state.isLoggedIn} name={this.state.name} />
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

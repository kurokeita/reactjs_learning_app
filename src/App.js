import React from 'react'
import Test from './Test'
import logo from './logo.svg'
import Time from './Time'
import './App.css'

let times = <Time time={new Date().toLocaleTimeString()} />
console.log(times)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Test name="kurokeita" />
        <Test name="Tester" />
        <Test name="someone" />
        <Test name="myself" />
        <p>
          {/* {new Date().toLocaleTimeString()} */}
          {/* {times} */}
          <Time time={new Date().toLocaleTimeString()} />
        </p>
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

export default App

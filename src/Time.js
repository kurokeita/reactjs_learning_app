import React, { useState, useEffect } from 'react'

// class Time extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {time: new Date()}
//     }
//
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             this.props.interval
//         )
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timerID)
//     }
//
//     tick() {
//         this.setState({
//             time: new Date()
//         })
//     }
//
//     render() {
//         return <span>The time is: {this.state.time.toLocaleTimeString()}</span>
//     }
// }

function Time(props) {
    const [ time, setTime ] = useState((new Date()).toLocaleTimeString())

    useEffect(() => {
        const timer = setInterval(
            () => {
                setTime((new Date()).toLocaleTimeString())
            },
            props.interval
        )
        return () => {
            clearInterval(timer)
        }
    })

    return(
        <span>The time is: {time}</span>
    )
}

export default Time
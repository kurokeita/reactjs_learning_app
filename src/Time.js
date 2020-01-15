import React from 'react'

class Time extends React.Component {
    constructor(props) {
        super(props)
        this.state = {time: new Date()}
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            this.props.interval
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            time: new Date()
        })
    }

    render() {
        return <span>The time is: {this.state.time.toLocaleTimeString()}</span>
    }
}

export default Time
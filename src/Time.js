import React from 'react'

class Time extends React.Component {
    render() {
        return <span>The time is: {this.props.time}</span>
    }
}

export default Time
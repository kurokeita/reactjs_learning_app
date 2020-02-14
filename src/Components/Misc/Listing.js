import React from 'react'

class Listing extends React.Component {
    render() {
        let list = this.props.list
        let i = 0
        let out = list.map((item) => (
            <li key={i++}>{item}</li>
        ))
        return (
            <ul>{out}</ul>
        )
    }
}

export default Listing

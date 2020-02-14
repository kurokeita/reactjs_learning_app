import React from 'react'

function Text(props) {
    return (
        <span>The button is {props.toggle ? 'ON' : 'OFF'}</span>
    )
}

export default Text

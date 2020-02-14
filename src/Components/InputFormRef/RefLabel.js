import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'

export default function RefButton(props) {
    return (
        <InputGroup.Text style={props.style} className="mb-3" onClick={props.onClick}>
            {props.children}
        </InputGroup.Text>
    )
}

import React from 'react'
import Button from 'react-bootstrap/Button'

export default function RefButton(props) {
    return (
        <Button style={props.style} variant={props.variant? props.variant : 'primary'} name={props.name} className="mb-3" onClick={props.onClick}>
            {props.children}
        </Button>
    )
}

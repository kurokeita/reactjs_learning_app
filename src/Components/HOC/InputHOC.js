import React from 'react'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

export default function InputHOC(props) {
    return (
        <InputGroup className='mb-3' >
            <FormControl {...props} />
        </InputGroup>
    )
}
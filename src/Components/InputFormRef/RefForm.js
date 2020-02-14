import React from 'react'
import RefButton from './RefButton'
import RefLabel from './RefLabel'
import RefInput from './RefInput'
import InputGroup from 'react-bootstrap/InputGroup'

function RefForm(props) {

    const refFocus = React.createRef()

    function handleClick() {
        refFocus.current.focus()
        console.log(refFocus.current.value)
    }

    return (
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                {
                    (props.type === 'button') ? 
                        <RefButton onClick={handleClick} style={props.style} variant={props.variant}>{props.buttonName}</RefButton>
                        : <RefLabel onClick={handleClick} style={props.style}>{props.labelName}</RefLabel>
                }
            </InputGroup.Prepend>
            <RefInput ref={refFocus} {...props} />
        </InputGroup>
    )
}

export default RefForm

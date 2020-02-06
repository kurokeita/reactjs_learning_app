import React from 'react'
import RefButton from './RefButton'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class RefForm extends React.Component {
    constructor(props) {
        super(props)
        this.refFocus = React.createRef()

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.refFocus.current.focus()
    }

    render() {
        return (
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <RefButton onClick={this.handleClick}>{this.props.name}</RefButton>
                </InputGroup.Prepend>
                <FormControl name="ref_test[]" ref={this.refFocus}/>
            </InputGroup>
        )
    }
}

export default RefForm

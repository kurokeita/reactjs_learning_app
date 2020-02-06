import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props)
        // this.state({
        //     temperature: ''
        // })
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(e) {
        this.props.onChange(e.target.value, e.target.name)
    }

    render() {
        return(
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>{this.props.type}: </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder="0" value={this.props.value} name={this.props.type} onChange={this.handleOnChange} />
                </InputGroup>
            </div>
        )
    }
}

export default TemperatureInput

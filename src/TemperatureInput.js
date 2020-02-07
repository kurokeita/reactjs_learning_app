import React from 'react'
import RefForm from './RefForm'

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
                <RefForm name={this.props.type} buttonName={this.props.type} value={this.props.value} onChange={this.handleOnChange}/>
            </div>
        )
    }
}

export default TemperatureInput

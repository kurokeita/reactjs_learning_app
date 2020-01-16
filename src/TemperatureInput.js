import React from 'react'

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
                <label>{this.props.type}: </label>
                <input type="text" value={this.props.value} name={this.props.type} onChange={this.handleOnChange} />
            </div>
        )
    }
}

export default TemperatureInput

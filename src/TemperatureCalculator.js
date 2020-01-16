import React from 'react'
import TemperatureInput from './TemperatureInput'

class TemperatureCalculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Celsius: 0,
            Fahrenheit: 32,
        }
        this.handleTemperature = this.handleTemperature.bind(this)
    }

    handleTemperature(value, type) {
        let other = (type === 'Celsius') ? 'Fahrenheit' : 'Celsius'
        value = (value === '') ? 0 : value
        this.setState({
            [type]: value,
            [other]: this.temperatureConvert(value, type)
        })
    }

    temperatureConvert(value, type) {
        if (type === 'Celsius') {
            return parseFloat(value) * 1.8 + 32
        } else {
            return (parseFloat(value) - 32) / 1.8
        }
    }

    render() {
        return(
            <div>
                <TemperatureInput type="Celsius" value={this.state.Celsius} onChange={this.handleTemperature} />
                <TemperatureInput type="Fahrenheit" value={this.state.Fahrenheit} onChange={this.handleTemperature} />
            </div>
        )
    }
}

export default TemperatureCalculator

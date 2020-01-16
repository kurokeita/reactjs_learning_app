import React from 'react'
import Test from './Test'
import Listing from './Listing'
import Toggle from './Toggle'
import Form from './Form'
import TemperatureCalculator from './TemperatureCalculator'

class Data extends React.Component {
    render() {
        let list = ['kurokeita', 'nsfw', 'harunonaru', 'macross']

        if (!this.props.isLoggedIn) {
            return null
        }
        return(
            <div>
                <Test name={this.props.name} />
                <Listing list={list} />
                <TemperatureCalculator />
                <Toggle />
                <Form />
            </div>
        )
    }
}

export default Data

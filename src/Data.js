import React from 'react'
import Test from './Test'
import Listing from './Listing'
import Toggle from './Toggle'
import Form from './Form'
import TemperatureCalculator from './TemperatureCalculator'
import RefForm from './RefForm'

class Data extends React.Component {
    render() {
        let list = ['kurokeita', 'nsfw', 'harunonaru', 'macross']

        if (!this.props.isLoggedIn) {
            return null
        }
        return(
            <div>
                <Test name={this.props.name}>
                    <code>Test props children</code>
                </Test>
                <Listing list={list} />
                <TemperatureCalculator />
                <Toggle />
                <RefForm name='Test 1'/>
                <RefForm name='Test 2'/>
                <RefForm name='Test new'/>
                <Form changeName={this.props.changeName}/>
            </div>
        )
    }
}

export default Data

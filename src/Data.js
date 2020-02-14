import React from 'react'
import Test from './Test'
import Listing from './Listing'
import Toggle from './Toggle'
import Form from './Form'
import TemperatureCalculator from './TemperatureCalculator'
import RefForm from './RefForm'
import HOC from './HOC'
import InputHOC from './InputHOC'
import NoteCard from './NoteCard'

class Data extends React.Component {
    render() {
        let list = ['kurokeita', 'nsfw', 'harunonaru', 'macross']

        if (!this.props.isLoggedIn) {
            return null
        }
        const WrappedInputHOC = HOC(InputHOC, {
            input: 'kurokeita'
        })
        const NewWrappedInputHOC = HOC(InputHOC, {
            input: 'naru'
        })
        return (
            <div>
                <Test name={this.props.name}>
                    <code>Test props children</code>
                </Test>
                <Listing list={list} />
                <TemperatureCalculator />
                <Toggle />
                <RefForm buttonName='Test 1' />
                <RefForm buttonName='Test 2' />
                <RefForm buttonName='Test new' />
                {/*{HOC(InputHOC,{*/}
                {/*    input: 'kurokeita',*/}
                {/*    name: 'input_text'*/}
                {/*})}*/}
                <WrappedInputHOC name='name_1' />
                <NewWrappedInputHOC name='name_2' />
                <Form changeName={this.props.changeName} />
                <NoteCard />
            </div>
        )
    }
}

export default Data

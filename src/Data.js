import React from 'react'
import Test from './Components/Misc/Test'
import Listing from './Components/Misc/Listing'
import Toggle from './Components/Misc/Toggle'
import Form from './Form'
import TemperatureCalculator from './Components/Temperature/TemperatureCalculator'
import RefForm from './Components/InputFormRef/RefForm'
import HOC from './Components/HOC/HOC'
import InputHOC from './Components/HOC/InputHOC'
import NoteCard from './Components/Note/NoteCard'

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
                <RefForm type='button' buttonName='Test 1' />
                <RefForm type='button' buttonName='Test 2' />
                <RefForm type='label' labelName='Test new' />
                <WrappedInputHOC name='name_1' />
                <NewWrappedInputHOC name='name_2' />
                <Form changeName={this.props.changeName} />
                <NoteCard />
            </div>
        )
    }
}

export default Data

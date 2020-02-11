import React from 'react'

const HOC = (WrappedComponent, input) => {
    return class HOC extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                value: btoa(input.input),
                input: input.input
            }
        }

        render() {
            console.log(this.state.input)
            return (
                <WrappedComponent {...this.props} value={this.state.value} readOnly/>
            )
        }
    }
}

export default HOC

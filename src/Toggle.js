import React from 'react'
import Text from './Text'

class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleState: false
        }
        
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = async () => {
        this.setState({
            toggleState: !this.state.toggleState
        })
        
    }

    render() {
        let button = <button className="Button-dark" onClick={this.handleClick}>{this.state.toggleState ? 'ON' : 'OFF'}</button>
        return(
            <div>
                <p>
                    {button}
                </p>
                <Text toggle={this.state.toggleState} />
            </div>
        )
    }

}

export default Toggle

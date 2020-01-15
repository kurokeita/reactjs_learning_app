import React from 'react'

class Text extends React.Component {
    render() {
        if (this.props.toggle) {
            return(
                <span>The button is ON</span>
            )
        } else {
            return(
                <span>The button is OFF</span>
            )
        }
    }
}

export default Text

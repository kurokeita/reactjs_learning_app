import React from 'react'
import Button from 'react-bootstrap/Button'

class RefButton extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <Button variant="primary" name={this.props.name} className="mb-3" onClick={this.props.onClick}>
                {this.props.children}
            </Button>
        )
    }
}

export default RefButton

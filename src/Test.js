import React from 'react';

class Test extends React.Component {
    render() {
        return(
            <div>
                <p>Hello, {this.props.name}</p>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default Test;
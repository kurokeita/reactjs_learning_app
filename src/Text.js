import React from 'react'

// class Text extends React.Component {
//     render() {
//         if (this.props.toggle) {
//             return(
//                 <span>The button is ON</span>
//             )
//         } else {
//             return(
//                 <span>The button is OFF</span>
//             )
//         }
//     }
// }

function Text(props) {
    return (
        <span>The button is {props.toggle ? 'ON' : 'OFF'}</span>
    )
}

export default Text

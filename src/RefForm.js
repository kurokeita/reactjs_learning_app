import React from 'react'
import RefButton from './RefButton'
import RefInput from './RefInput'
import InputGroup from 'react-bootstrap/InputGroup'
// import FormControl from 'react-bootstrap/FormControl'

// class RefForm extends React.Component {
//     constructor(props) {
//         super(props)
//         this.refFocus = React.createRef()
//
//         this.handleClick = this.handleClick.bind(this)
//     }
//
//     handleClick() {
//         this.refFocus.current.focus()
//         console.log(this.refFocus.current.value)
//     }
//
//     render() {
//         return (
//             <InputGroup className="mb-3">
//                 <InputGroup.Prepend>
//                     <RefButton onClick={this.handleClick}>{this.props.buttonName}</RefButton>
//                 </InputGroup.Prepend>
//                 {/*<FormControl name={this.props.name} ref={this.refFocus} value={this.props.value} onChange={this.props.onChange}/>*/}
//                 <RefInput ref={this.refFocus} {...this.props}/>
//             </InputGroup>
//         )
//     }
// }

function RefForm(props) {

    const refFocus = React.createRef()

    function handleClick() {
        refFocus.current.focus()
        console.log(refFocus.current.value)
    }

    return (
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <RefButton onClick={handleClick} style={props.style} variant={props.variant}>{props.buttonName}</RefButton>
            </InputGroup.Prepend>
            <RefInput ref={refFocus} {...props} />
        </InputGroup>
    )
}

export default RefForm

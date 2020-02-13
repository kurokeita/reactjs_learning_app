import React from 'react'
import FormControl from 'react-bootstrap/FormControl'

// const RefInput = React.forwardRef((props, ref) => (
//         <FormControl name={props.name} ref={ref} value={props.value} onChange={props.onChange}/>
// ))

// class RefInput extends React.Component {
//     render() {
//         return (
//             <FormControl name={this.props.name} ref={this.props.innerRef} value={this.props.value} onChange={this.props.onChange}/>
//         )
//     }
// }
//
// export default React.forwardRef((props, ref) => (
//     <RefInput innerRef={ref} {...props}/>
// ))

const RefInput = React.forwardRef((props, ref) => {
    return(
        <FormControl name={props.name} ref={ref} value={props.value} onChange={props.onChange}/>
    )
})

export default RefInput
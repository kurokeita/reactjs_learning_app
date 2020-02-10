import React from 'react'
import FormControl from 'react-bootstrap/FormControl'

const RefInput = React.forwardRef((props, ref) => (
        <FormControl name={props.name} ref={ref} value={props.value} onChange={props.onChange}/>
))

export default RefInput